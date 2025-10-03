const pool=require('../DB/Database');

const createQuestion=async({quizId,type,question,answer})=>{
    const result=await pool.query('INSERT INTO questions(quizid,questionText,question_type,answer) VALUES($1,$2,$3,$4) RETURNING *',[quizId,question,type,answer]);
    return result.rows[0]; 

}

const renderQuestions = async(quizId)=>{
    const result = await pool.query(
        'SELECT id, questiontext AS "questionText", answer, question_type FROM questions WHERE quizid = $1',
        [quizId]
    );
    return result.rows;
}

module.exports={createQuestion,renderQuestions};