const express = require("express")
const subjectcontroller = require("./SubjectController")


const SubjectRouter = express.Router()

SubjectRouter.post("/insert", subjectcontroller.InsertSubjects)


module.exports = SubjectRouter

