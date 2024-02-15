const mongoose = require("mongoose")
const URI = process.env.MONGO_URL

mongoose.set("strictQuery", false)

const connectDB = async () => {
try {
    const connectDB = await mongoose.connect(URI)
    console.log(`MONGODB is connected ${connectDB.connection.host}`)

}
catch(err) {
    console.log(err)
}
}


module.exports = connectDB