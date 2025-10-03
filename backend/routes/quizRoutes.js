const express=require("express");
const createQuizController=require('../controllers/quizController')
const authMiddleware = require("../middleware/authMiddleware");
const {displayQuizzes}=require('../models/quizesSchema')

const router=express.Router();

router.post('/create',authMiddleware,createQuizController);
router.get('/list', authMiddleware, displayQuizzes)

module.exports=router;