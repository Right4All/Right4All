
-- ====================================
-- LENGTH & DOMAIN CHECKS
-- ====================================

-- Limit guide_summary length 
ALTER TABLE comm_practical_guide
  ADD CONSTRAINT chk_cpg_summary_len
  CHECK (char_length(guide_summary) <= 5000) NOT VALID;

ALTER TABLE comm_practical_guide
  VALIDATE CONSTRAINT chk_cpg_summary_len;

-- Survivor story lengths 
ALTER TABLE survivor_story
  ADD CONSTRAINT chk_story_title_en_len
  CHECK (char_length(story_title_en) <= 3000) NOT VALID,
  ADD CONSTRAINT chk_story_body_en_len
  CHECK (char_length(story_body_en)  <= 3000) NOT VALID;

ALTER TABLE survivor_story VALIDATE CONSTRAINT chk_story_title_en_len;
ALTER TABLE survivor_story VALIDATE CONSTRAINT chk_story_body_en_len;


-- ====================================
-- CATEGORY / THEME WHITELISTS
-- ====================================

-- Practical guides — category whitelist
ALTER TABLE comm_practical_guide
  ADD CONSTRAINT chk_cpg_category_name
  CHECK (
    category_name IN (
      'Work & Legal’,’Health & Safety,’Housing & Everyday Life,’Money & Daily Life’,’Family and Education,’Money & Daily Life’
    )
  ) NOT VALID;

ALTER TABLE comm_practical_guide
  VALIDATE CONSTRAINT chk_cpg_category_name;

-- Survivor stories — theme whitelist 
ALTER TABLE survivor_story
  ADD CONSTRAINT chk_story_theme
  CHECK (
    theme IN (
      'Fair Pay & Wages’,’Housing & Living Conditions’, ’Safety & Health','Legal & ‘Documents,’Working Hours & Conditions’, ‘Resilience & Success’, ‘Workplace Rights & Respect’
    )
  ) NOT VALID;

ALTER TABLE survivor_story
  VALIDATE CONSTRAINT chk_story_theme;


-- ====================================
--  CREATED_AT REQUIREMENTS 
-- ====================================

-- Index used by the 90-day retention job
CREATE INDEX IF NOT EXISTS ix_chatbot_conversations_created_at
  ON chatbot_conversations (created_at);



