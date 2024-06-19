const express = require("express")
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000;

const data = [
    { name: "Thomas", age: 13 },
    { name: "Anja", age: 22 },
    { name: "Lorenz", age: 10 },
    { name: "Roberto", age: 12 },
    { name: "Dimi", age: 11 }
]

app.get("/people", (req, res) => {
    res.send(data)
})

app.get("/people/:id", (req, res) => {
    let id = req.params.id
    res.send(data[id])
})

app.delete("/people/:id", (req, res) => {
    let id = req.params.id
    data.splice(id, 1);
    res.send("done")
})

app.post("/people", (req, res) => {
    data.push(req.body)

    res.send(req.body)
})

app.listen(port, () => {
    console.log("Server running on port " + port)
})

