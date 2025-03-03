const express = require('express');
const mainRouter = express.Router();
const studentRouter = require('./studentRoutes')
mainRouter.use('/student',studentRouter);
// mainRouter.use('/teacher');

module.exports = mainRouter;
