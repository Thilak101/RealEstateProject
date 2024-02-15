const router = require("express").Router()
const User = require("../models")
const {test, signupController} = require("./controllers/userController")

router.get("/", test)

router.post("/signup", signupController)

module.exports = router