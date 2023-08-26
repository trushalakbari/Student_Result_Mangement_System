const express = require("express")
const markscontroller = require("./MarksController")

const MarksRouter = express.Router()

MarksRouter.post("/insert", markscontroller.AddMarks)
MarksRouter.get("/:id", markscontroller.Result)

module.exports = MarksRouter