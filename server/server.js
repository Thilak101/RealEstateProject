const express = require("express")
require("dotenv").config()

const connectDB = require("./config/db")


const app = express()
connectDB()

const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
    console.log(`server was started on ${PORT} PORT`)
})