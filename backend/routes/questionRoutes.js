const express = require('express')

const {createNewQuestion,ListQuestions} = require('../controllers/questionController')


const router = express.Router()

router.post('/create', createNewQuestion);
router.get('/list',ListQuestions)

module.exports=router;


