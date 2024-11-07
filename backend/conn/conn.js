const mongoose=require('mongoose')
const conn= async (req,res)=>{
   try {
    await mongoose.connect("mongodb+srv://nihar2624:panchal6822@cluster0.dvnux.mongodb.net/").then(()=>{
        console.log("connected to database")
    })
   } catch (error) {
    res.status(400).json({message:"not connected"})
   }
}
conn()