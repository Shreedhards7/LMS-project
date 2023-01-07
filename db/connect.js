const mongoose =require ('mongoose')
//const connectionString = "mongodb+srv://shree:shree@nodeexpressproject.ewhdul6.mongodb.net/LMS?retryWrites=true&w=majority"
const connectDB =  async ()=>{

    try{
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO_URL, () => {
          console.log("Connected to MongoDB");
        });
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}
//const PORT = 3000;
//app.listen(PORT,(req,res)=> console.log(`connected to DB ${PORT}`))
module.exports = connectDB