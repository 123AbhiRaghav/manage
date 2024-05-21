const express = require("express")
const app = express() 
const connect = require("./Database/connect")

const studentRoute = require("./Routers/StudentRoute")
const mentorRoute = require("./Routers/MentorRoute")
app.use(express.json())

require("dotenv").config()
const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME

app.use("/student", studentRoute)
app.use("/mentor", mentorRoute)

app.get("/",(req,res)=>{
    res.send("Hello World")
})

connect().then(()=>{
  try {
      app.listen(PORT,()=>console.log(`app lisenting server ${PORT}`))
      
  } catch (error) {
      console.log(`Cannot Connect to the server`)
  }
}).catch((error)=>console.log('Invalid Database Connection'))