const express = require("express")

const app = express()

app.use(express.json())

const noteModel = require("./models/noteModel")

app.post("/notes",async (req,res)=>{
    const {title , description} = req.body

    const note = await noteModel.create({
        title , description
    })

    res.send(201).json({
        message: "Note is created successfully",
        note
    })
})

app.get("/notes",async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Note fetched successfully",
        notes
    })
})

/* delete note with the id from req params*/
app.delete("/notes/:id",async (req,res)=>{
    const id  = req.params.id
        
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted successfully"
    })
})


/* Patch api */

app.patch("/notes/:id",async (req,res)=>{
    const  id = req.params.id
    const{description} = req.body

    await noteModel.findByIdAndUpdate(id, {description})

    res.status(200).json({
        messsageL:"data updated successfully",
        
    })
    
})

module.exports = app