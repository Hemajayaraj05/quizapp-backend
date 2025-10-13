const express=require("express");
const {createQuizController,displayQuizBasedOnId}=require('../controllers/quizController')
const authMiddleware = require("../middleware/authMiddleware");


const router=express.Router();

router.post('/create',authMiddleware,createQuizController);
router.get('/list', authMiddleware,displayQuizBasedOnId)


module.exports=router;