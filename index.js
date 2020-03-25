
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

app.get('/', (request, response) => {
    response.send('<p>HY Fullstack MooC Phonebook backend V2 by MarkoTammi</p>')
    })


// Info how many names in phonebook with timestamp
app.get('/info', function (request,response) {
    const personLength = persons.length.toString()
    const resContent = '<p>Phonebook has info for '+ personLength + ' people</p><p>' + new Date() + '</p>'
    response.send(resContent)
})

// To get all persons
app.get('/api/persons', (request, response) => {
    response.json(persons)
    })


// Person info based on id number
app.get('/api/persons/:id', function (request,response) {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        // If person is not found by id return 404
        response.status(404).end()
    }})

// Delete person based on id
app.delete('/api/person/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        persons = persons.filter(person => person.id !== id)  
        response.status(204).end()
    } else {
        // If person is not found by id return 404
        response.status(404).end()
    }})


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)

