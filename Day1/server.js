const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('helllo world')
})



app.listen(3000)
