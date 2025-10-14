const {createQuiz, displayQuizzes,updateName, deleteQuiz}=require("../models/quizesSchema");

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

const updateQuizName = async (req, res) => {
  console.log("This is update quiz", req.body, req.params.id);

  try {
    const teacherid = req.user.id;
    const quizid = req.params.id;
    const { quizname } = req.body;

    const updated = await updateName(teacherid, quizid, quizname);
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message || "Failed to update name" });
  }
};

const deleteQuizName=async(req,res)=>{
   try{
   const teacherid = req.user.id;
    const quizid=req.params.id;
    const deleted=await deleteQuiz(quizid,teacherid);
    res.json({deletedQuiz:deleted});

   }
   catch(err)
   {
    console.log(err);
    res.status(400).json({message:err.message || "Failed to delete quiz"})
   }
}




module.exports ={createQuizController,displayQuizBasedOnId,updateQuizName,deleteQuizName};



