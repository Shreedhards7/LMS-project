const submit = require('../models/assignment')

const getallbyreg_id = async (req,res) => {
    try{
        let submits=await submit.find()
        console.log(submit)
        res.send({"data":submit})
    }catch(error) {
        res.status(400).json({msg : error})
    }
}
const getallbyassignment = async (req,res)=> {
    try{
        const submits=await submit.create(req.body)
        res.status(201).json({submits})
    }catch(error) {
        res.status(400).json({msg : error })
    }
}



module.exports = {
    getallbyreg_id,
    getallbyassignment
}