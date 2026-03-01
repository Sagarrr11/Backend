const express = require("express")

const app = express()


app.use(express.json())

/* 
Post/notes
req.body => {title, description}
*/
const noteModel = require("./models/notesModel") 

app.post("/notes",async (req,res)=>{
    const {title,description} = req.body

    const note = await noteModel.create({
        title , description

    })

    res.status(201).json({
        message: "Note successfully created",
        note 
    })
})

app.get("/notes",async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:" Note data fetched successfully",
        notes
    })
})


module.exports = app