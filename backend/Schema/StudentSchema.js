const mongoose = require("mongoose");
const SubjectMarks = require("./SubjectSchema");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name:{type:String,required:true,},
    password:{type:String,required:true},
    sec:{type:String,required:true},
    roll:{type:String,required:true},
    marks:{type:Schema.Types.ObjectId,ref:'SubjectMarks'}
});

module.exports= mongoose.model('Student',StudentSchema);