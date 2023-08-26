const { default: mongoose } = require("mongoose");

class MarksModal {
    constructor() {
        this.schema = new mongoose.Schema({
            marks: { type: Number, required: true },
            subject: { type: mongoose.Types.ObjectId, required: true, ref: "tbl_subs" },
            student: { type: mongoose.Types.ObjectId, required: true, ref: "tbl_studs" },
            totalmarks: { type: Number, required: true, default: 100 },
        })

        this.Marks = new mongoose.model("tbl_mars", this.schema)
    }

    InsertMarks(data) {
        return this.Marks.create(data)
    }

    ShowResult(id) {
        const pipeline = [
            {
                $match: {
                    student: new mongoose.Types.ObjectId(id)
                }
            },
            {
                $lookup: {
                    from: "tbl_subs",
                    foreignField: "_id",
                    localField: "subject",
                    as: "subject",
                }
            },
            {
                $unwind: "$subject"
            },
            {
                $group: {
                    _id: "$student",
                    totalmarks: { $sum: "$totalmarks" },
                    achievedmarks: { $sum: "$marks" },
                    percentage: { $avg: "$marks" },
                    subject: {
                        $push: {
                            marks: "$marks",
                            name: "$subject.name"
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: "tbl_studs",
                    foreignField: "_id",
                    localField: "_id",
                    as: "student",
                }
            },
            {
                $unwind: "$student"
            },
            {
                $project: {
                    _id: 0
                }
            }
        ]
        return this.Marks.aggregate(pipeline)
    }
}

const marksmodal = new MarksModal()
module.exports = marksmodal