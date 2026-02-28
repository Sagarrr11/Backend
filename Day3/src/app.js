/* 
    -server create krna
    -server ko config

*/

const express = require("express")

const app = express()

app.use(express.json())

const notes = []

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.post("/notes",(req,res)=>{
    res.send(req.body)
    notes.push(req.body)
    
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("note deleted successfully")

})

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.send("note updated successfull ")
})


module.exports = app