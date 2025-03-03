const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name:{type:String,required:true,},
    email:{type:String},
    password:{type:String,required:true},
    facId:{type:String,required:true}
    
});

module.exports= mongoose.model('Teacher',TeacherSchema);