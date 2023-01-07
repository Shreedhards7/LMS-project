const mongoose=require('mongoose')

const assignmentschema = new mongoose.Schema({
    
   assignment_id:{
      type: String,
    },
  assignmentfile : {
    type:String
}
 
  })
  const assignment = mongoose.model("assignment", assignmentschema);

  module.exports= assignment