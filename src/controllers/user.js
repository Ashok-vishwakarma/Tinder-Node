const user = (req, res) => {
    res.status(202).send("user is working")
}
const manager = (req, res) => {
    res.status(202).send("manager is working")
}
const admin = (req, res) => {
    res.status(202).send("admin is working")
}



module.exports = { user, manager, admin }