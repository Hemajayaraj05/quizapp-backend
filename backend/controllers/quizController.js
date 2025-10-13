const {createQuiz, displayQuizzes}=require("../models/quizesSchema");

const createQuizController=async(req,res)=>{

    console.log("Req.body",req.body);

     const teacherId = req.user.id; 
    try{
        const newQuiz=await createQuiz(req.body.quizname,teacherId);
        res.json(newQuiz);
    }
    catch(err)
    {
         console.log(err);
    res.status(400).json({ message: err.message || "Failed to create quiz" });
    }
}


const displayQuizBasedOnId=async(req,res)=>{
    try{
        const teacherId=req.user.id;
        const quizDisplay=await displayQuizzes(teacherId);
        res.json(quizDisplay);

    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({message:err.message|| "Failed to fetch quizzes"});


    }

}



module.exports ={createQuizController,displayQuizBasedOnId};



