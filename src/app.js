// console.log("helllojbic")
const express = require('express')
const app = express()



//middleware
app.use('/test', (req, res) => {
    res.send("done")
})


app.use('/hello', (req, res) => {
    res.send("hello nodemon is implemented ")
})



//
app.get('/getdata', (req, res) => {
    res.send("uhjvbajehbuiabdx uaj ")
})


app.listen('2525')