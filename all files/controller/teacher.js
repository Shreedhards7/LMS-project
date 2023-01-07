const teacher = require('../models/teacher')

const getallteacher = async (req,res) => {
    try{
        let teachers=await teacher.find()
        console.log(teacher)
        res.send({"data":teacher})
    }catch(error) {
        res.status(400).json({msg : error})
    }
}
const registerteacher = async (req,res)=> {
    try{
        const teachers=await teacher.create(req.body)
        res.status(201).json({teachers})
    }catch(error) {
        res.status(500).json({msg : error })
    }
}

const jwt = require('jsonwebtoken')
const loginteacher = async (req,res)=>{
    try{
    res.send({"register no":registerteacher})
    }catch(error){
    res.status(400).json({msg:error})
}}







module.exports = {
    getallteacher,
    loginteacher,
    registerteacher

}