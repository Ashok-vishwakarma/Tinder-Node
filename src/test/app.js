// console.log("helllojbic")
const express = require('express')
const app = express()

//  ()=>{ }   <= this function is called router handeler


// //orders matter alot "/" hoga toh
// app.use('/hello/2', (req, res) => {
//     res.send("hello hello hello hello")
// })

// app.use('/hello', (req, res) => {
//     res.send("hello nodemon is implemented ")
// })
// //
// app.get('/getdata', (req, res) => {
//     res.send("uhjvbajehbuiabdx uaj ")
// })

// //middleware
// //note :- abb use mein mene default "/" kiya toh server per if mein koi or path mein hit karunga toh wo muje again again 
// // res.send("done")  he return karega (its kind of wild card)
// //why..? becasue "/" ka rout match huaa toh wo use route mein he jake return karega 
// // case 2:- /hello ye path per muje ye  res.send("hello nodemon is implemented ") ye send karega 
// //    /hello ke baad kuch bhi hoo it will ex- '/hello/biasd/as' it willreturn u res. ka value per /hello123 esa likha toh wo error throw karega

// app.use('/', (req, res) => {
//     res.send("done")
// })





//using express
//this will only handle Get call to /user


//In this b is optional if we check in postman with ac or abc it will work without any error
// app.get('/ab\\?c', (req, res) => { res.send("it will worssak") })


//abc will work and in starting (a) and in End (c) should be there any b can be written n number of times still work
//ex:- abc - work , 2) abbbbbbbbbbbbc - work , 3) abcbcbc:- not work
app.get('/abc', (req, res, next) => {
    console.log("abc touter")
    // res.send("it will work1234567890"),
    // id res.send means it will send res and stop executing here and if i don't write send and next 
    // it will stop here like infite, and if i write next() , it will move to next route handeler
    // if res.send hain or next() bhi hoga toh wo execute karega res send karega per uske bad error bhi dega becaus eof next()
    //if next() is above to res.send() then it will skip this route and move to another route o/t:- 2 response handelere will work know , and also throw error
    next()
    res.send("it will work1234567890")
},

    (req, res, next) => {
        res.send("2 response handelere will work know")
    }
)



//in start ab and in end cd should be there and between them we can write any thing it will work
// app.get('/ab*cd', (req, res) => { res.send("it wiasll work") })


app.get('/user/:userId', (req, res) => {
    res.send(["it will work", {
        "firstName": "Ashok",
        "lastName": "vishwakarma",
        "city": "Navi Mumbai",
        "phoneNumber": 6767676767
    }])
})


app.get('/user', (req, res) => {
    res.send({
        "firstName": "Ashok",
        "lastName": "vishwakarma",
        "city": "Navi Mumbai",
        "phoneNumber": 6767676767
    }
    )
})

app.post('/user', (req, res) => {
    // write your logic here to save in db
    res.send("Data has been saved Succesfully")
})



app.listen('2525')