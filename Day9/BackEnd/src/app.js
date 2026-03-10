const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.json())

// Use of static lets the user access the data or file of the related path
app.use(express.static("./public"))

const noteModel = require("./models/noteModel")

/* Create Note */
app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title,
        description
    })

    res.status(201).json({
        message: "Note is created successfully",
        note
    })
})

/* Get All Notes */
app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Note fetched successfully",
        notes
    })
})

/* Delete note with the id from req params */
app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted successfully"
    })
})

/* Patch api */
app.patch("/api/notes/:id", async (req, res) => {
    const id = req.params.id
    const { title, description } = req.body

    await noteModel.findByIdAndUpdate(id, { title, description })

    res.status(200).json({
        messsage: "data updated successfully"
    })
})

/* Serve frontend */
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"))
})

module.exports = app