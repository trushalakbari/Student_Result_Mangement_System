const marksmodal = require("./MarksModal")

class MarksController {
    async AddMarks(req, res) {
        try {
            const { student, subject, marks, totalmarks } = req.body
            if (!student) return res.status(400).send({ message: "Missing Dependancy Students" })
            if (!marks) return res.status(400).send({ message: "Missing Dependancy Marks" })
            if (!subject) return res.status(400).send({ message: "Missing Dependancy Subjects" })
            if (!totalmarks) return res.status(400).send({ message: "Missing Dependancy TotalMarks" })

            const result = await marksmodal.InsertMarks(req.body)
            if (!result) return res.status(500).send({ message: "Something Went Wrong" })

            return res.status(200).send({ message: "Success" })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: "Internal Server Error" })

        }
    }

    async Result(req, res) {
        try {
            const { id } = req.params
            if (!id) return res.status(400).send({ message: "Id not Found" })


            const result = await marksmodal.ShowResult(id)
            if (!result) return res.status(500).send({ message: "Something Went Wrong" })

            return res.status(200).send({ message: "Success", result })
        } catch (error) {
            console.log(error)
            if (!result) return res.status(500).send({ message: "Internal Server Error" })

        }
    }
}

const markscontroller = new MarksController()
module.exports = markscontroller