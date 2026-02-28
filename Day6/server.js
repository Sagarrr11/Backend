/*  server ko start krna
database se connect krna
*/

const app = require('./src/app')
const mongoose = require("mongoose")

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})