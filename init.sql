CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    emailid VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,   -- hashed password, not plain text
    role VARCHAR(20) NOT NULL CHECK (role IN ('teacher', 'student', 'admin')),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    quizname TEXT NOT NULL,
    teacherid INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
);



CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    quizid INT REFERENCES quizzes(id) ON DELETE CASCADE,
    questionText TEXT NOT NULL,
    question_type VARCHAR(20) NOT NULL, 
    answer TEXT
);

CREATE TABLE options (
    id SERIAL PRIMARY KEY,
    questionid INT REFERENCES questions(id) ON DELETE CASCADE,
    optiontext TEXT NOT NULL,
    iscorrect BOOLEAN DEFAULT FALSE,
    UNIQUE(questionid, optiontext)
);