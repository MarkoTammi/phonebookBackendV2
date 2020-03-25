
// Start server by "npm run dev"

// 
const express = require('express')
const app = express()

let persons = [
      {
        "name": "Marko",
        "number": "98989",
        "id": 1
      },
      {
        "name": "Pena Kukkuu",
        "number": "0909",
        "id": 2
      },
      {
        "name": "Kalle",
        "number": "7767676",
        "id": 3
      },
      {
        "name": "Jaska",
        "number": "88",
        "id": 4
      },
      {
        "name": "Ööö",
        "number": "8989",
        "id": 5
      },
      {
        "name": "Aaa",
        "number": "0900",
        "id": 6
      },
      {
        "name": "Äiti",
        "number": "909090",
        "id": 7
      }
    ]

app.get('/', (req, res) => {
    res.send('<p>HY Fullstack MooC Phonebook backend V2 by MarkoTammi</p>')
    })


// Info how many names in phonebook with timestamp
app.get('/info', function (req,res) {
    const personLength = persons.length.toString()
    const response = '<p>Phonebook has info for '+ personLength + ' people</p><p>' + new Date() + '</p>'
    res.send(response)
})

// To get all persons
app.get('/api/persons', (req, res) => {
    res.json(persons)
    })


// Person info based on id number
app.get('/api/persons/:id', function (req,res) {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    } else {
        // If person is not found by if return 404
        res.status(404).end()
    }})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)

