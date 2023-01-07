const mongoose=require('mongoose')

const studentschema = new mongoose.Schema({
    name: {
      type: String,
    },
    reg_id:{
      type: String,
    },
  email: {
    type:String
  },
  phonenumber : {
    type:String
  },
  address : {
    type:String
  },
  password : {
 type:String
  }
  })

  

  const student = mongoose.model("student", studentschema);


  module.exports=student