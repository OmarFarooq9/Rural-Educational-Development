const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    lang:{type:Number,required:true},
    maths:{type:Number,required:true},
    sci:{type:Number,required:true},
    art:{type:Number,required:true},
    total:{type:Number}
});

module.exports= mongoose.model('SubjectMarks',SubjectSchema);