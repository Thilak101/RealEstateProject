const { User } = require("../../models")
const bcrypt = require("bcrypt")
const { errorHandler } = require("../../middleware/error")


const test = (req, res) => {
    res.send("route was working")
}

const signupController = async (req, res, next) => {
    try {
        const { username, password, email } = req.body
        const salt = bcrypt.genSaltSync(10)
        const passwordHassed = bcrypt.hashSync(password, salt)
        const user = await User.create({
            username: username,
            password: passwordHassed,
            email: email
        })
        return res.json({ msg: user, success: true })

    }
    catch (err) {
        // res.status(500).json({ message: err.message, success: false })
        next(err)
    }
}

module.exports = {
    test,
    signupController
}