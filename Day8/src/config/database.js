const mongoose = require("mongoose")
function connectDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connect to database")
    })
}

module.exports = connectDb