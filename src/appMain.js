const express = require('express');
const app = express()
//database connection
const connection = require("./config/database")
const User = require('./models/userSchema')
const { authMiddle } = require('./middleware/adminMiddleware');
const { signIn, getUser } = require("./controllers/loginController")
const { userAuthenticate } = require("./middleware/userAuthVerify")
const { user, manager, admin } = require("./controllers/user")
const { isRollAllowed } = require("./middleware/roleManager")


app.use(express.json());

// app.use((req, res, next) => {
//     next();
// })


//function is used to check weather the user is authentication or not
//checking weather the use is authenticate or not
//common middleware
const isUserAuthenticate = (req, res, next) => {
    const auth = req.headers['authorization'] || req.body.auth_token;

    if (!auth) {
        res.status('403').json({ "message": "User is not authentication" })
    }

    next();
}

//for particular medilware 
// app.use('/admin', authMiddle)


// app.get('/admin/list', (req, res, next) => {
//     try {
//         console.log("admin/list")
//         // throw new Error('errroorrrrrrr')
//         res.send("get all the admin list details");
//     } catch (err) {
//         res.status(500).send('Somthing Went Wrong')

//     }
// })

// app.use('/login' , isUserAuthenticate , require('./path of my router'))












////////////////////TINDER APP START/////////////////////////////////////////////////

app.get('/v1/admin', userAuthenticate, isRollAllowed('Admin'), admin)
app.get('/v1/manager', userAuthenticate, isRollAllowed('Manager', 'Admin'), manager)
app.get('/v1/user', userAuthenticate, isRollAllowed('user', 'Manager', 'Admin'), user)

// app.use('/api' ,)
app.post("/signup", signIn)
app.get('/getUser', getUser)







connection().then(() => {
    app.listen(3030, () => {
        console.log('server is connected sucessfully')
        console.log('Server conected')
    })
}).catch(() => {
    console.log("database is not connected")
})
