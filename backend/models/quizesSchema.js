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

const updateName=async(teacherId,quizid,quizname)=>{
    const result=await pool.query(
        "UPDATE quizzes SET quizname=$1 WHERE teacherid=$2 AND id=$3",[quizname,teacherId,quizid]
    )

    return result.rows[0];
}

const deleteQuiz=async(quizid,teacherId)=>{
  
    const result=await pool.query("DELETE FROM quizzes WHERE id=$1  AND teacherid=$2 RETURNING *",[quizid,teacherId])
    return  result.rows[0];

}

module.exports = { createQuiz, displayQuizzes,updateName,deleteQuiz};
