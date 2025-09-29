const bcrypt = require("bcrypt");
const User = require('../models/userSchema');
const jwt = require("jsonwebtoken");


const SECRET_KEY = "AS#$H@OK123!"


const signIn = async (req, res) => {
    const { firstName, lastName, emailId, password, age, gender, role } = req.body;
    try {
        const hassPassword = await bcrypt.hash(password, 10)
        const userdata = new User({ firstName, lastName, emailId, password: hassPassword, age, gender, role });
        await userdata.save();
        res.send(userdata.firstName + " Name user is created")
    } catch (err) {
        res.status(400).send(err)
    }
}


const getUser = async (req, res) => {
    const userMailId = req.body.emailId
    try {
        // const getuser = await User.findOne({ emailId: userMailId })
        const getuser = await User.findOne({ emailId: userMailId })
        const jwts = jwt.sign({ "Mail": getuser.emailId, "role": getuser.role }, SECRET_KEY)
        res.status(200).send({ token: jwts, message: "logined successfully", Details: getuser })
    } catch (err) {
        res.status(401).send("somthing went wrong")
    }
}




module.exports = { signIn, getUser }