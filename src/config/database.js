//databse connection logic
const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/devTinder";
// const connectionString = "mongodb://localhost:27017/";

const connection = async () => {
    await mongoose.connect(connectionString)
}


module.exports = connection

// connection().then(() => console.log("mongodb is connected")).catch((err) => console.log("err"))

