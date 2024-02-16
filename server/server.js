const express = require("express")
require("dotenv").config()
const cors = require("cors")

const connectDB = require("./config/db")
const apiRouter = require("./routes")
const {errorHandling} = require("./middleware/err")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api", apiRouter)
app.use(errorHandling)

connectDB()

const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
    console.log(`server was started on ${PORT} PORT`)
})