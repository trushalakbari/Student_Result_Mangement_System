const express = require("express")
const studentcontroller = require("./StudentController")

const StudentRouter = express.Router()

StudentRouter.post("/insert", studentcontroller.AddStudent)

module.exports = StudentRouter