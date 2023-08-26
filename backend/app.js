const express = require("express")
const ConnectDb = require("./connectdb")
const SubjectRouter = require("./Subject/SubjectRouter")
const StudentRouter = require("./Students/StudentRouter")
const MarksRouter = require("./Marks/MarksRouter")



const app = express()
ConnectDb()
app.use(express.json())


app.use("/addsub", SubjectRouter)
app.use("/addstu", StudentRouter)
app.use("/addmar", MarksRouter)



app.listen(7001, () => {
    console.log("Server Started")
})