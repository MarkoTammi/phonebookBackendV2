
// Start server by "npm run dev"

// 
const express = require('express')
const app = express()

// Express's json parser
app.use(express.json())


let persons = [
      {
        "name": "Marko",
        "number": "98989",
        "id": 1
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


// Return info how many names in phonebook with timestamp
app.get('/info', function (request,response) {
    const personLength = persons.length.toString()
    const resContent = '<p>Phonebook has info for '+ personLength + ' people</p><p>' + new Date() + '</p>'
    response.send(resContent)
})

// Return all persons
app.get('/api/persons', (request, response) => {
    response.json(persons)
    })


// Return person info based on id number
app.get('/api/persons/:id', function (request,response) {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        // If person is not found by id return 404
        response.status(404).end()
    }})


// Add new person
app.post('/api/persons/', function (request,response) {

    const newId = Math.floor(Math.random() * Math.floor(100000))    
    const body = request.body 

    // POST request headers
    //console.log("POST request headers", request.headers)

    // Error if name or number field is empty
    if (!body.name || !body.number) {
        return response.status(400).json({error: 'Name or number is missing'})
    }

    // Error if new name already exist
    if (persons.find(person => person.name === body.name) ) {
        return response.status(400).json({error: 'Name already exist. Name have to be unique.'})
    }

    // create new person object from request data with random id
    const newPerson = {
        name : body.name, 
        number : body.number,
        id : newId 
    }

    // Add new person to phonebook
    persons = persons.concat(newPerson)

    // Return new person with id
    response.json(newPerson)
})


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


// Unknown end poist
const unknownEndpoint = (req,res) => {
    res.status(404).send({ error: 'Unknown endpoint'})
  }
app.use(unknownEndpoint)


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)

