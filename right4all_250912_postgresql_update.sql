
DROP TABLE IF EXISTS contract CASCADE;
DROP TABLE IF EXISTS contract_text CASCADE;
DROP TABLE IF EXISTS contract_translation CASCADE;
DROP TABLE IF EXISTS contract_issue CASCADE;
DROP TABLE IF EXISTS contract_summary CASCADE;
DROP TABLE IF EXISTS clause CASCADE;
DROP TABLE IF EXISTS contract_clause_match CASCADE;
DROP TABLE IF EXISTS employment_detail CASCADE;
DROP TABLE IF EXISTS work_log CASCADE;
DROP TABLE IF EXISTS derived_wage_rate CASCADE;
DROP TABLE IF EXISTS payslip CASCADE;
DROP TABLE IF EXISTS payslip_item CASCADE;
DROP TABLE IF EXISTS media_asset CASCADE;
DROP TABLE IF EXISTS story_media CASCADE;


-- DELETE existing data and recreate 
DROP TABLE IF EXISTS organization CASCADE;

-- Recreate organization table with new structure
CREATE TABLE organization (
    org_id         INTEGER NOT NULL,
    org_name       VARCHAR(250) NOT NULL,
    service_type   VARCHAR(50),
    org_email      VARCHAR(100),
    org_descr_en   VARCHAR(600),
    state_code     INTEGER NOT NULL,
    org_url        VARCHAR(400),
    org_phone_no   VARCHAR(25),
    org_address    VARCHAR(500),
    operation_hour VARCHAR(300),
    org_en         VARCHAR(300),
    tag            VARCHAR(400)
);

COMMENT ON COLUMN organization.org_id IS 'org_id';
COMMENT ON COLUMN organization.org_name IS 'org_name';
COMMENT ON COLUMN organization.service_type IS 'Housing & Shelter, Health & Wellbeing, Work, Legal Aid, Other support';
COMMENT ON COLUMN organization.org_email IS 'org_email';
COMMENT ON COLUMN organization.org_descr_en IS 'org_descr_en';
COMMENT ON COLUMN organization.state_code IS 'state_code';
COMMENT ON COLUMN organization.org_url IS 'org_url';
COMMENT ON COLUMN organization.org_phone_no IS 'org_phone_no';
COMMENT ON COLUMN organization.org_address IS 'org_address';
COMMENT ON COLUMN organization.operation_hour IS 'operation_hour';
COMMENT ON COLUMN organization.org_en IS 'English Name with Malay Name if available';
COMMENT ON COLUMN organization.tag IS 'tag';

ALTER TABLE organization ADD CONSTRAINT organization_pk PRIMARY KEY (org_id);

-- Create COMM_PRACTICAL_GUIDE table (correct structure from ERD)
CREATE TABLE comm_practical_guide (
    guide_topic_id INTEGER PRIMARY KEY,
    guide_topic_name VARCHAR(300) NOT NULL,
    guide_summary VARCHAR(5000),
    guide_who_is_this_for VARCHAR(5000),
    guide_what_you_need VARCHAR(5000),
    guide_steps VARCHAR(5000),
    guide_legal_chckpoint VARCHAR(5000),
    cost_n_time VARCHAR(5000),
    prob_n_scams VARCHAR(5000),
    whr_to_get_help VARCHAR(5000),
    disclaimer VARCHAR(5000),
    category_name VARCHAR(50)
);

COMMENT ON COLUMN comm_practical_guide.guide_topic_id IS 'guide_topic_id';
COMMENT ON COLUMN comm_practical_guide.guide_topic_name IS 'topic';
COMMENT ON COLUMN comm_practical_guide.guide_summary IS 'summary';
COMMENT ON COLUMN comm_practical_guide.guide_who_is_this_for IS 'Who is this for';
COMMENT ON COLUMN comm_practical_guide.guide_what_you_need IS 'What you need';
COMMENT ON COLUMN comm_practical_guide.guide_steps IS 'Steps';
COMMENT ON COLUMN comm_practical_guide.guide_legal_chckpoint IS 'Legal/Policy checkpoints';
COMMENT ON COLUMN comm_practical_guide.cost_n_time IS 'Costs & time';
COMMENT ON COLUMN comm_practical_guide.prob_n_scams IS 'Common problems & scams';
COMMENT ON COLUMN comm_practical_guide.whr_to_get_help IS 'Where to get help';
COMMENT ON COLUMN comm_practical_guide.disclaimer IS 'Disclaimer';
COMMENT ON COLUMN comm_practical_guide.language_code IS 'language_code';

-- Composite primary key (guide_topic_id, language_code)
ALTER TABLE comm_practical_guide ADD CONSTRAINT comm_guide_interaction_pk PRIMARY KEY (guide_topic_id, language_code);

-- Create COMMUNITY_INTERACTION table (new structure)
CREATE TABLE community_interaction (
    interaction_id BIGINT NOT NULL,
    user_id        INTEGER NOT NULL,
    story_id       BIGINT NOT NULL
);

COMMENT ON COLUMN community_interaction.interaction_id IS 'interaction_id';
COMMENT ON COLUMN community_interaction.user_id IS 'user_id';
COMMENT ON COLUMN community_interaction.story_id IS 'story_id';

ALTER TABLE community_interaction ADD CONSTRAINT community_interaction_pk PRIMARY KEY (interaction_id);

-- Create SURVIVOR_STORY table
CREATE TABLE survivor_story (
    story_id           BIGINT NOT NULL,
    story_title_en     VARCHAR(100),
    story_body_en      VARCHAR(3000),
    language_code      CHAR(2) NOT NULL,
    theme        VARCHAR(50),
    tips_or_lesson       VARCHAR(400),
    story_url      VARCHAR(400),
    like_count         BIGINT,
    view_count         BIGINT
);

COMMENT ON COLUMN survivor_story.story_id IS 'story_id';
COMMENT ON COLUMN survivor_story.language_code IS 'language_code';
COMMENT ON COLUMN survivor_story.story_title_en IS 'story_title_en';
COMMENT ON COLUMN survivor_story.story_body_en IS 'story_body_en';
COMMENT ON COLUMN survivor_story.theme IS 'theme';
COMMENT ON COLUMN survivor_story.tips_or_lesson IS 'tips_or_lesson';
COMMENT ON COLUMN survivor_story.status IS 'status';
COMMENT ON COLUMN survivor_story.tips_or_lesson IS 'tips_or_lesson';
COMMENT ON COLUMN survivor_story.story_url IS 'story_url';
COMMENT ON COLUMN survivor_story.like_count IS 'like_count';
COMMENT ON COLUMN survivor_story.view_count IS 'view_count';

ALTER TABLE survivor_story ADD CONSTRAINT survivor_story_pk PRIMARY KEY (story_id);

-- Community interaction foreign keys
ALTER TABLE community_interaction
    ADD CONSTRAINT comm_inter_user_fk FOREIGN KEY (user_id) REFERENCES "USER" (user_id);

ALTER TABLE community_interaction
    ADD CONSTRAINT comm_inter_story_fk FOREIGN KEY (story_id) REFERENCES survivor_story (story_id);

-- Language foreign keys for translation support
ALTER TABLE comm_practical_guide
    ADD CONSTRAINT lang_guide_fk FOREIGN KEY (language_code) REFERENCES preferred_language (language_code);

ALTER TABLE survivor_story
    ADD CONSTRAINT survivor_story_language_fk FOREIGN KEY (language_code) REFERENCES preferred_language (language_code);

-- Organization foreign key (recreate)
ALTER TABLE organization
    ADD CONSTRAINT org_state_fk FOREIGN KEY (state_code) REFERENCES dim_state (state_code);


SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

UPDATE organization
SET operation_hour = NULL
WHERE org_id >= 331;

-- =============================================
-- SUMMARY OF CHANGES
-- =============================================
-- 
-- Tables Dropped (contract-related):
-- - contract
-- - contract_text
-- - contract_translation
-- - contract_issue
-- - contract_summary
-- - clause
-- - contract_clause_match
-- - employment_detail
-- - work_log
-- - derived_wage_rate
-- - payslip
-- - payslip_item
-- - media_asset
-- - story_media
--
-- Tables Modified:
-- - organization (updated with new columns: org_address, operation_hour, org_en, tag)
--
-- Tables Added:
-- - comm_practical_guide (new structure)
-- - community_interaction (new structure)
-- - survivor_story (new structure)
--
-- Total tables dropped: 14
-- Total tables added: 3
-- Total foreign key constraints added: 3