const router = require("express").Router()
const User = require("../models")

router.get("/", (req, res) => {
    res.send(`router is created`)
})


module.exports = router