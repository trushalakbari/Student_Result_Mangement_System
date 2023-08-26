const { default: mongoose } = require("mongoose")

const ConnectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/studentdata')
        console.log("Db Connected")
    } catch (error) {
        console.log("Db Connection loss")
    }
}

module.exports = ConnectDb