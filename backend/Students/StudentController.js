const studentmodal = require("./StudentModal")

class StudentController {
    async AddStudent(req, res) {
        try {
            const { name, std } = req.body
            if (!name) return res.status(400).send({ message: "Missisng Dependancy Name" })
            if (!std) return res.status(400).send({ message: "Missisng Dependancy Standard" })

            const result = await studentmodal.InsertStudent(req.body)
            if (!result) return res.status(500).send({ message: "Somethimg Went Wrong" })

            return res.status(200).send({ message: "Success" })
        } catch (error) {
            return res.status(500).send({ message: "internal Server Error" })

        }
    }
}

const studentcontroller = new StudentController()

module.exports = studentcontroller