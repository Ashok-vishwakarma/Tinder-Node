const express = require('express')
const app = express()

app.get('/abc', [(req, res, next) => {
    console.log("abc touter")
    // res.send("it will work1234567890"),
    // id res.send means it will send res and stop executing here and if i don't write send and next 
    // it will stop here like infite, and if i write next() , it will move to next route handeler
    // if res.send hain or next() bhi hoga toh wo execute karega res send karega per uske bad error bhi dega becaus eof next()
    //if next() is above to res.send() then it will skip this route and move to another route o/t:- 2 response handelere will work know , and also throw error
    next()
    // res.send("it will work1234567890")
},

    (req, res, next) => {
        // next()
        console.log("2 is working")
        next()
        // res.send("2 response handelere will work know")
    },

    (req, res, next) => {
        next()
        res.send("3 response handelere will work know")
    }]
)

app.listen(7777 , ()=>{
    console.log('')
})

// i can also wrap all te router fuction in array