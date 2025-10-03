const pool=require('../DB/Database')

const createQuiz=async(quizname,teacherid)=>{
    const result=await pool.query("INSERT INTO quizzes(quizname,teacherid) VALUES($1,$2) RETURNING *",[quizname,teacherid])
    return result.rows[0];
}


const displayQuizzes=async(req,res)=>{
    try{
    const result=await pool.query("SELECT id,quizname FROM quizzes");
    res.json(result.rows);
    }catch(err)
    {
        console.log("Error in fetching quizzes ",err);
        res.status(500).json({message:"Server error"});
    }
    
}

module.exports={createQuiz,displayQuizzes}
