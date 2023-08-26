const { default: mongoose } = require("mongoose");

class SubjectModal {
    constructor() {
        this.schema = new mongoose.Schema({
            name: { type: String, required: true, unique: true }
        })

        this.Subject = mongoose.model("tbl_subs", this.schema)
    }

    AddSubject(data) {
        return this.Subject.create(data)
    }

}
const subjectmodal = new SubjectModal()
module.exports = subjectmodal