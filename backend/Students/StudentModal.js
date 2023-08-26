const { default: mongoose } = require("mongoose");

class StudentModal {
    constructor() {
        this.schema = new mongoose.Schema({
            name: { type: "String", required: true },
            std: { type: "String", required: true }
        })
        this.Student = new mongoose.model("tbl_studs", this.schema)
    }
    InsertStudent(data) {
        return this.Student.create(data)
    }
}

const studentmodal = new StudentModal()
module.exports = studentmodal