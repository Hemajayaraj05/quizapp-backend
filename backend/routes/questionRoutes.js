const express = require('express')

const {createNewQuestion,ListQuestions, deleteQuestionController, updateQuestionController} = require('../controllers/questionController')


const router = express.Router()

router.post('/create', createNewQuestion);
router.get('/list',ListQuestions)
router.delete('/delete',deleteQuestionController);
router.put('/update',updateQuestionController)
module.exports=router;


