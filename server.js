const express = require("express")
const app = express()

let data = [
    {
        id: 1,
        name: "Sophie K",
        human: true,
    },
    {
        id: 2,
        name: "Sam K",
        human: false,
    },
]

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
