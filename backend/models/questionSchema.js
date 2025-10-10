const pool = require("../DB/Database");

const createQuestion = async ({ quizId, type, question, answer }) => {
  const result = await pool.query(
    "INSERT INTO questions(quizid,questionText,question_type,answer) VALUES($1,$2,$3,$4) RETURNING *",
    [quizId, question, type, answer]
  );
  return result.rows[0];
};

const renderQuestions = async (quizId) => {
  const result = await pool.query(
    'SELECT id, quizid,questiontext AS "questionText", answer, question_type FROM questions WHERE quizid = $1',
    [quizId]
  );
  return result.rows;
};

const deleteQuestion = async (questionId, quizId) => {
  const result = await pool.query(
    "DELETE FROM questions WHERE id=$1 AND quizid=$2 RETURNING *",
    [questionId, quizId]
  );
  return result.rows;
};

const updateQuestion = async ({ id, quizid, questionText, answer ,question_type}) => {
  const result = await pool.query(
    "UPDATE questions SET questionText=$1 ,answer=$2 ,question_type=$5 WHERE id=$3 AND quizid=$4",
    [questionText, answer, id, quizid,question_type]
  );
  return result.rows[0];
};

module.exports = {
  createQuestion,
  renderQuestions,
  deleteQuestion,
  updateQuestion,
};
