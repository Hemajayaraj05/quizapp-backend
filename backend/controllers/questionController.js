const { createQuestion } = require("../models/questionSchema");
const { renderQuestions ,deleteQuestion} = require("../models/questionSchema");

const createNewQuestion = async (req, res) => {
  try {
    const newQuestion = await createQuestion(req.body);
    res.status(201).json(newQuestion);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
};

const ListQuestions = async (req, res) => {
  try {
    console.log("This is for listing questions", req.query);
    const { quizId } = req.query;
    const listAllQuestions = await renderQuestions(quizId);
    res.status(200).json(listAllQuestions);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
};

const deleteQuestionController = async (req, res) => {
  try {
    console.log("This is for delete questions", req.query);
    const { questionId, quizId } = req.query;
    const deleteOneQuestion = await deleteQuestion(questionId, quizId);
    res.status(200).json(deleteOneQuestion);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
};

module.exports = { createNewQuestion, ListQuestions,deleteQuestionController };
