const pool = require("../DB/Database");

const createQuiz = async (quizname, teacherid) => {
  const result = await pool.query(
    "INSERT INTO quizzes(quizname,teacherid) VALUES($1,$2) RETURNING *",
    [quizname, teacherid]
  );
  return result.rows[0];
};

const displayQuizzes = async (teacherId) => {
 
    const result = await pool.query(
      "SELECT id,quizname FROM quizzes WHERE teacherid=$1",
      [teacherId]
    );
    return result.rows;
  
};

module.exports = { createQuiz, displayQuizzes };
