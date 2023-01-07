const express = require('express')
const app = express()
const studenttasks =require('./routes/student')
const teachertask=require ('./routes/teacher')
const assignmenttask = require('./routes/assignment')
const submittask = require('./routes/submit')
const dotenv = require('dotenv')
const connectDB = require('./db/connect')

require('dotenv').config()


app.use('/hello',(req,res)=>{
    res.send('LMS PROJECT')
})


app.use(express.json())


app.use('/student',studenttasks)
app.use('/teacher',teachertask)
app.use('/assigment',assignmenttask)
app.use('/submit',submittask)


const PORT = 5000;
const start = async ()=>{
  try{
      await connectDB(process.env.MONGO_URL)
      app.listen(PORT,console.log(`server is listening on port ${PORT}....`))
  }
      catch(error) {
          console.log(error)
      }
  }
 start()

