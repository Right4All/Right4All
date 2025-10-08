--A) State overview (AC 1.1)
DROP VIEW IF EXISTS public.v_state_overview CASCADE;
CREATE OR REPLACE VIEW public.v_state_overview AS
SELECT
  s.state_code,
  TRIM(s.state_name_en)           AS state_name_en,
  m.migrant_number,
  TRIM(m.risk_level)              AS risk_level,
  m.manuf_perc_in_state,
  m.const_perc_in_state,
  m.agric_percent_in_state
FROM public.dim_state AS s
LEFT JOIN public.migrant_by_state AS m
  USING (state_code);

COMMENT ON VIEW public.v_state_overview IS
'State-level migrant overview: numbers, risk, and industry percentages.';

SELECT * FROM v_state_overview WHERE state_code = 14;

--B) Sector overview (AC 1.2)
DROP VIEW IF EXISTS public.v_sector_overview CASCADE;
CREATE OR REPLACE VIEW public.v_sector_overview AS
SELECT
  ds.sector_id,
  TRIM(ds.sector_name)            AS sector_name,
  ds.sector_description,
  v.total_accidents_2023,
  TRIM(v.accident_risk_level)     AS accident_risk_level,
  v."2001_perc",
  v."2005_perc",
  v."2010_perc",
  v."2015_perc",
  v."2020_perc",
  v."2023_perc"
FROM public.dim_sector AS ds
LEFT JOIN public.migrant_sector_visual AS v
  USING (sector_id);

COMMENT ON VIEW public.v_sector_overview IS
'Sector metrics and historic percentages for charts.';

SELECT * FROM v_sector_overview WHERE sector_id = 1;

--C) Nationality × Sector comparison (AC 1.3)
DROP VIEW IF EXISTS public.v_nationality_by_sector CASCADE;
CREATE OR REPLACE VIEW public.v_nationality_by_sector AS
SELECT
  ns.sector_id,
  TRIM(ds.sector_name)            AS sector_name,
  ns.nationality_id,
  dn.nationality_name_en,
  ns.number_of_migrant
FROM public.nationality_sector AS ns
JOIN public.dim_sector      AS ds USING (sector_id)
JOIN public.dim_nationality AS dn USING (nationality_id);

COMMENT ON VIEW public.v_nationality_by_sector IS
'migrants by sector and nationality.';

SELECT nationality_name_en, sector_name, number_of_migrant
FROM v_nationality_by_sector
WHERE nationality_name_en IN ('Malaysia','Nepal','Bangladesh')
ORDER BY sector_name, nationality_name_en;

--D) Rights guide (AC 2.x)
DROP VIEW IF EXISTS public.v_topic_legal_content CASCADE;

-- View: for a given topic (and optional language),
-- return the plain legal title + content, plus a bit of context.
CREATE OR REPLACE VIEW public.v_topic_legal_content AS
SELECT
  ltm.topic_id,
  TRIM(rt.slug_text)                AS topic_slug,
  TRIM(rt.topic_title)              AS topic_title,
  r.language_code,
  r.source_id,
  r.legal_id,
  r.section_id,
  r.part_label,
  r.legal_title_plain,
  r.legal_content_plain_en
FROM public.legal_topic_mapping AS ltm
JOIN public.ref_legal_section   AS r
  ON (ltm.language_code, ltm.source_id, ltm.legal_id)
   = (r.language_code,  r.source_id,  r.legal_id)
LEFT JOIN public.rights_topic    AS rt
  ON rt.topic_id = ltm.topic_id;

COMMENT ON VIEW public.v_topic_legal_content IS
'AC 2.1 — Select a topic to get legal_title_plain and legal_content_plain_en ( filtered by language).';

-- -----------------------------------------
-- Helpful indexes for fast filtering
CREATE INDEX IF NOT EXISTS idx_ltm_topic        ON public.legal_topic_mapping(topic_id);
CREATE INDEX IF NOT EXISTS idx_rt_slug          ON public.rights_topic(TRIM(slug_text));
-- ref_legal_section already has a PK on (language_code, source_id, legal_id)

-- 1) By topic id
SELECT * FROM public.v_topic_legal_content
WHERE topic_id = 1
ORDER BY source_id, legal_id, section_id;

-- 2) By topic id + language
SELECT * FROM public.v_topic_legal_content
WHERE topic_id = 1 AND language_code = 'EN'
ORDER BY source_id, legal_id, section_id;

-- 3) By topic slug 
SELECT * FROM public.v_topic_legal_content
WHERE topic_slug = 'working-hours' AND language_code = 'EN'
ORDER BY source_id, legal_id, section_id;


--E) Quiz questions with options (AC 3.x)
-- 0) topic_id and title 
SELECT topic_id, topic_title FROM rights_topic ORDER BY topic_id LIMIT 5;

-- 1) Create a test user and capture the id
begin;
INSERT INTO "user"(language_code) VALUES ('EN') RETURNING user_id;
-- user_id = 6


-- 2) Start a quiz result for topic 2 (status not_completed)
INSERT INTO quiz_result(user_id, topic_id, completion_status)
VALUES (6, 2, 'not_completed')
RETURNING result_id;
-- result_id = 8
-- rollback;


-- 3) Insert some answers for that result.
--    This picks ONE option per question for topic 2 
WITH qs AS (
  SELECT qq.question_id, qq.legal_topic_mapping_id
  FROM quiz_question qq
  JOIN legal_topic_mapping ltm
    ON ltm.legal_topic_mapping_id = qq.legal_topic_mapping_id
  WHERE ltm.topic_id = 2
  ORDER BY qq.question_order
  LIMIT 5             -- choose how many questions you want to simulate
),
opts AS (
  SELECT DISTINCT ON (qo.question_id)
         qo.option_id, qo.question_id, qo.is_correct, qo.legal_topic_mapping_id
  FROM quiz_option qo
  JOIN qs USING (question_id, legal_topic_mapping_id)
  ORDER BY qo.question_id, (qo.is_correct = 'True') DESC, qo.option_id
)
INSERT INTO quiz_answer (is_correct, result_id, user_id, topic_id, selected_option_id)
SELECT o.is_correct, 8, 6, 2, o.option_id
FROM opts o;

-- 4) Mark completion 
UPDATE quiz_result
SET completion_status = 'completed'
WHERE result_id = 8 AND user_id = 6;

-- 5) Inspect computed fields
SELECT result_id, user_id, topic_id, total_question, corrected_answer_num, score_percent, explanation
FROM quiz_result
WHERE result_id = 8 AND user_id = 6;

rollback;

-- first 2 correct, next 3 wrong

begin;
INSERT INTO "user"(language_code) VALUES ('EN') RETURNING user_id;
-- user_id = 9


-- 2) Start a quiz result for topic 2 (status not_completed)
INSERT INTO quiz_result(user_id, topic_id, completion_status)
VALUES (9, 2, 'not_completed')
RETURNING result_id;
-- result_id = 11
-- rollback;

WITH qs AS (               -- pick 5 questions for topic 2, keep their order
  SELECT qq.question_id,
         qq.legal_topic_mapping_id,
         ROW_NUMBER() OVER (ORDER BY qq.question_order) AS rn
  FROM quiz_question qq
  JOIN legal_topic_mapping ltm
    ON ltm.legal_topic_mapping_id = qq.legal_topic_mapping_id
  WHERE ltm.topic_id = 2
  ORDER BY qq.question_order
  LIMIT 5
),
picked AS (                -- choose a correct option for rn<=2, otherwise a wrong one
  SELECT
    CASE
      WHEN rn <= 2 THEN (
        SELECT qo.option_id
        FROM quiz_option qo
        WHERE qo.question_id = qs.question_id
          AND qo.legal_topic_mapping_id = qs.legal_topic_mapping_id
          AND qo.is_correct = 'True'
        ORDER BY qo.option_id
        LIMIT 1
      )
      ELSE COALESCE(      -- prefer a wrong option; if none exists, fall back to any option
        (SELECT qo.option_id
         FROM quiz_option qo
         WHERE qo.question_id = qs.question_id
           AND qo.legal_topic_mapping_id = qs.legal_topic_mapping_id
           AND (qo.is_correct IS DISTINCT FROM 'True')
         ORDER BY qo.option_id
         LIMIT 1),
        (SELECT qo.option_id
         FROM quiz_option qo
         WHERE qo.question_id = qs.question_id
           AND qo.legal_topic_mapping_id = qs.legal_topic_mapping_id
         ORDER BY qo.option_id
         LIMIT 1)
      )
    END AS option_id,
    CASE WHEN rn <= 2 THEN 'True' ELSE 'False' END AS is_correct
  FROM qs
)
INSERT INTO quiz_answer (is_correct, result_id, user_id, topic_id, selected_option_id)
SELECT is_correct, 11, 9, 2, option_id
FROM picked;

-- complete the quiz 
UPDATE quiz_result
SET completion_status = 'completed'
WHERE result_id = 11 AND user_id = 9;

-- verify: total_question should be 5, corrected_answer_num should be 2
SELECT *
FROM quiz_result
WHERE result_id = 11 AND user_id = 9;

-- For result_id = 11, user_id = 9
SELECT
  qa.answer_id,
  qa.selected_option_id AS option_id,
  qo.question_id,
  qq.question_order,
  qa.is_correct
FROM quiz_answer AS qa
LEFT JOIN quiz_option  AS qo
  ON qo.answer_id = qa.answer_id
LEFT JOIN quiz_question AS qq
  ON qq.question_id = qo.question_id
 AND qq.legal_topic_mapping_id = qo.legal_topic_mapping_id
WHERE qa.result_id = 11
  AND qa.user_id   = 9
ORDER BY COALESCE(qq.question_order, 1), qa.answer_id;

SELECT * FROM quiz_result WHERE result_id = 11 AND user_id =9 and topic_id = 2;
-- 

rollback;
