-- Step 1: Drop the existing table (if it exists)
DROP TABLE IF EXISTS comm_practical_guide;

-- Step 2: Create the new table with the correct column names
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
    disclaimer VARCHAR(5000)
);