const mainRouter = require('./routes/mainRoutes');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


app.use(cors())
app.use(express.json());
app.use('/api/v1',mainRouter);
mongoose.connect('mongodb+srv://adnanali11875:helloworld@cluster0.juu9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Connect to db");
})
app.listen(3000,()=>{
    console.log("Listening on port 3000");
})