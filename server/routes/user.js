const router = require("express").Router()
const User = require("../models")
const {test} = require("./controllers/userController")

router.get("/", test)


module.exports = router