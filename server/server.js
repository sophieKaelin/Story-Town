import express from "express"
const app = express()
import { csvToJson } from "./csv-to-json.js"

csvToJson()

app.get("/", (request, response) => {
    response.send("<h1>THIS IS MY SERVER</h1>")
})

app.get("/api/data", (request, response) => {
    response.json(data)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
