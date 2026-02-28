const express = require("express")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello page")
})

const notes = []

app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message : "Note createsd successfully"
    })
})

/* get / notes */

app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes:notes
    })
})


/* delete */

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.status(204).json({
        messsage:  "Note deleted successfully"
    })
})

/* patch */
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.status(200).json({
        message:"notes successfully updated"
    })
})


module.exports = app