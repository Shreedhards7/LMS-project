const student = require('../models/student')

const getallstudent = async (req,res) => {
    try{
        
        let students=await student.find()
        console.log(student)
        res.send({"data":student})
    }catch(error) {
        res.status(400).json({msg : error})
    }
}
const registerstudent = async (req,res)=> {
    try{
        const students=await student.create(req.body)
        res.status(201).json({students})
    }catch(error) {
        res.status(500).json({msg : error })
    }
}
const getstudentbyreg =(req,res)=> {
    res.send("names of the student by reg no.")
}
const getstudentbyalpha =(req,res)=> {
    res.send("names of the student by alphabetic order")
}

    const jwt = require('jsonwebtoken')
const loginstudent = async (req,res)=>{
    try{
        const students=await student.create(req.body)
        res.send({'data':student})
    }catch(error){
    res.status(400).json({msg:error})
}}





module.exports = {
    getallstudent,
    loginstudent,
    registerstudent,
    getstudentbyreg,
    getstudentbyalpha,

}