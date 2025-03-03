const express = require('express');
const studentRouter = express.Router();
const {studentLogin,studentSignup,getStudents,getStudent} = require('../controllers/studentControllers');
studentRouter.post('/login',studentLogin);
studentRouter.post('/signup',studentSignup);
studentRouter.get('/allStudents',getStudents);
studentRouter.get('/:id',getStudent);

module.exports = studentRouter;