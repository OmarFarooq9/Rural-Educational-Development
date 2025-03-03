const Student =require('../Schema/StudentSchema');

async function studentSignup(req, res, next) {
    const stu = req.body;
    const exist = await Student.findOne({ name: stu.name, roll: stu.roll }); // Use findOne instead of find
    if (exist) {
        console.log("Student exists log");
        res.status(403).json({
            success: false,
            msg: "User already exists!"
        });
        return;
    }
    const newStudent = new Student(stu);
    await newStudent.save();
    return res.status(200).json({
        success: true,
        msg: "Student Registered!",
        data: newStudent,
        id:newStudent._id
    });
}


async function studentLogin(req,res,next){
    const stu = req.body;
    const exist =await Student.findOne({sec:stu.sec,roll:stu.roll});
    if(!exist){
        return res.status(404).json({
            success:false,
            msg:"User not found"
        })
        
    }
    return res.status(200).json({
        success:true,
        msg:"Success full login !",
        data:exist,
        id:exist._id
    })
}

async function getStudents(req,res,next){
    const data= await Student.find();
    if(data){

        return res.status(200).json({
            success:true,
            msg:"All students",
            data:data
        });
        
    }else{
        return res.status(404).json({
            success:false,
            msg:"No student data available"
        })
    }
}
async function getStudent(req,res,next){
    const id = req.params.id
    const data= await Student.findById(id);
    if(data){

        return res.status(200).json({
            success:true,
            msg:"Student data",
            data:data
        });
        
    }else{
        return res.status(404).json({
            success:false,
            msg:"No student data available"
        })
    }
}

module.exports={studentLogin,studentSignup,getStudents,getStudent}