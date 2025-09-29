
const isRollAllowed = (...roles) => {
    const allUserRoes = [...roles]

    return (req, res, next) => {
        const currentUserRoll = req.user.role
        if (!currentUserRoll) {
            res.status(403).send({ message: "You Dont't Have Access Fot This Route" })
        }

        try {
            if (allUserRoes.includes(currentUserRoll)) {
                next()
            } else {
                res.status(500).send({ message: "you don't have accesss for this roters" })
            }
        } catch (err) {
            res.status(500).send({ message: "somthing went wrong", error: err })
        }
    }

}


module.exports = { isRollAllowed }