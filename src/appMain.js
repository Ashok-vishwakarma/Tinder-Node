const express = require('express');
const app = express()

const { authMiddle } = require('./middleware/adminMiddleware');

app.use(express.json());

// app.use((req, res, next) => {
//     next();
// })


//function is used to check weather the use is authentication or not
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

app.use('/admin', authMiddle)


app.get('/admin/list', (req, res, next) => {
    try {
        console.log("admin/list")
        // throw new Error('errroorrrrrrr')
        res.send("get all the admin list details");
    } catch (err) {
        res.status(500).send('Somthing Went Wrong')
        
    } 
})




// app.use('/login' , isUserAuthenticate , require('./path of my router'))



app.listen(3030, () => {
    console.log('Server conected')
})