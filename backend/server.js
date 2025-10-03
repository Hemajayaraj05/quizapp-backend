const express = require("express");
require('dotenv').config();
const authRoutes=require('./routes/authRoutes')
const quizRoutes=require('./routes/quizRoutes')
const questionRoutes=require('./routes/questionRoutes');
const cors=require('cors');

const app=express();
app.use(express.json());

app.use(cors());
app.use('/api/auth',authRoutes);
app.use('/api/auth/quiz',quizRoutes);
app.use('/api/auth/questions',questionRoutes);


app.listen(3001,()=>{
    console.log("Server listening to the port 3001 ")   
})