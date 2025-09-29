const jwt = require("jsonwebtoken");
const SECRET_KEY = "AS#$H@OK123!"

const userAuthenticate = async (req, res, next) => {

    try {
        let autheader = req.headers.Authorization || req.headers.authorization;
        if (autheader && autheader.startsWith("Bearer")) {
            console.log(autheader)
            token = autheader.split(" ")[1];


            //always write in try catch blog
            try {
                const decode = jwt.verify(token, SECRET_KEY);
                req.user = decode
                console.log(req.user)
                console.log(decode)
                next();
            } catch (err) {
                res.status(403).send("user is not authorized")
            }

        }

    } catch (err) {
        res.status(502).send("somthing is wrong");
    }
}


module.exports = { userAuthenticate }