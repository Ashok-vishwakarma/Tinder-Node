const authMiddle = (req, res, next) => {
    const token = "ashok";
    console.log(token)
    const userVerfied = token === "ashok";
    if (!userVerfied) {
        res.status(403).send("user is not verified")
    } else {
        next()
    }
}


module.exports = { authMiddle }