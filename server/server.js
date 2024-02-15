const express = require("express")
require("dotenv").config()
const cors = require("cors")

const connectDB = require("./config/db")
const apiRouter = require("./routes")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api", apiRouter)
connectDB()

const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
    console.log(`server was started on ${PORT} PORT`)
})