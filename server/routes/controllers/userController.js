const { User } = require("../../models")
const bcrypt = require("bcrypt")
const test = (req, res) => {
    res.send("route was working")
}

const signupController = async (req, res) => {
    try {
        const { username, password, email } = req.body
        const salt = bcrypt.genSaltSync(10)
        const passwordHassed = bcrypt.hashSync(password, salt)
        const user = await User.create({
            username: username,
            password: passwordHassed,
            email: email
        })
        res.json({ msg: user, success: true })
        return
    }
    catch (err) {
        res.status(500).json({ message: err.message, success: false })
    }
}

module.exports = {
    test,
    signupController
}