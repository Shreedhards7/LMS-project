const mongoose=require('mongoose')

const submitschema = new mongoose.Schema({
    
   reg_id:{
      type: String,
    },
  assignment_id : {
    type:String
},

    file :{
        type:String
},
    mark : {
        type:String
}
 
  })

module.exports=mongoose.models('submittask',submitschema)