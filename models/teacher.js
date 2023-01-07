const mongoose=require('mongoose')

const teacherschema = new mongoose.Schema({
    name: {
      type: String,
    },
   teacher_id:{
      type: String,
    },
  phonenumber : {
    type:String
  },
  password : {
 type:String
  }
  })
  const teacher = mongoose.model("teacher", teacherschema);
  module.exports=teacher