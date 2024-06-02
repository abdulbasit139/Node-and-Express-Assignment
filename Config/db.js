const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        if (conn) {
            console.log("connected to database")
        }
    } catch(err) {
        console.log("couldn't connect to database", err)
    }

}

module.exports = connectDB