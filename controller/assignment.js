const assignment = require('../models/assignment')

const seeallassignment = async (req,res) => {
    try{
        let assignments=await assignment.find()
        console.log(assignment)
        res.send({"data":assignment})
    }catch(error) {
        res.status(400).json({msg : error})
    }
}
const addassignment = async (req,res)=> {
    try{
        const assignments=await assignment.create(req.body)
        res.status(201).json({assignments})
    }catch(error) {
        res.status(500).json({msg : error })
    }
}



module.exports = {
    seeallassignment,
    addassignment
}