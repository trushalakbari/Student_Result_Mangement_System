const subjectmodal = require("./SubjectModal")

class SubjectController {
    async InsertSubjects(req, res) {
        try {
            if (!req.body?.name) {
                return res.status(400).send({ message: "Missing Dependancy Name" })
            }

            const result = await subjectmodal.AddSubject(req.body)
            if (!result) return res.status(500).send({ message: "Something Went Wrong" })

            return res.status(200).send({ message: "Success" })
        } catch (error) {
            console.log(error)
            if (!result) return res.status(500).send({ message: "Internal Server Error" })

        }
    }
}

const subjectcontroller = new SubjectController()
module.exports = subjectcontroller