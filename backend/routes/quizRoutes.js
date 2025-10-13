const express=require("express");
const {createQuizController,displayQuizBasedOnId, updateQuizName}=require('../controllers/quizController')
const authMiddleware = require("../middleware/authMiddleware");


const router=express.Router();

router.post('/create',authMiddleware,createQuizController);
router.get('/list', authMiddleware,displayQuizBasedOnId)
router.put('/update/:id',authMiddleware,updateQuizName)

module.exports=router;