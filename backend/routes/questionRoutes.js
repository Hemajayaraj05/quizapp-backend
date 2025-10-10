const express = require('express')

const {createNewQuestion,ListQuestions, deleteQuestionController} = require('../controllers/questionController')


const router = express.Router()

router.post('/create', createNewQuestion);
router.get('/list',ListQuestions)
router.delete('/delete',deleteQuestionController);
module.exports=router;


