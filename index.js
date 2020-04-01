
// Start server by "npm run dev"


const express = require('express')
const app = express()
const bodyParser = require('body-parser')


require('dotenv').config()
const Person = require('./models/person')


// Json parser
//app.use(express.json())
app.use(bodyParser.json())


// Cors middleware
const cors = require('cors')
app.use(cors())


// START of Morgan
// Middleware Morgan for loggin HTTP request
const morgan = require('morgan')
// Predefined 'tiny' logging "GET /api/persons 200 163 - 7.675 ms"
// app.use(morgan('tiny'))

// Define Morgan fields to log http request data
morgan.token('body', function (request, response) { return JSON.stringify(request.body) })

// Log example "POST - /api/persons - 200 - {"name":"Riitta","number":"123"} - 26/Mar/2020:08:45:19 +0000"
app.use(morgan(':method - :url - :status - :body - :date[clf]'))

// Log example "POST /api/persons 200 5.571 ms - 43 {"name":"Riitta","number":"123"} - 48 - Thu, 26 Mar 2020 08:49:15 GMT"
// app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length] - :date[web]'));
// END of Morgan



app.get('/', (request, response) => {
    response.send('<p>HY Fullstack MooC Phonebook backend V2 by MarkoTammi</p>')
})


// Return info how many names in phonebook with timestamp
app.get('/info', function (request,response) {
    Person
        .find({})
        .then(persons => {response.json(persons.length.toString())})
})


// Return all persons
app.get('/api/persons', (request, response, next) => {
    Person
        .find({})
        .then(persons => {response.json(persons.map(person => person.toJSON()))})
        .catch(error => next(error))
})


// Return person info based on id number
app.get('/api/persons/:id', function (request, response, next) {
    Person
        .findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person.toJSON())
            } else {
                // Id format ok but not found from mongo
                response.status(404).end()
            }
        })
        /* .catch(error => {
            console.log(error)
            response.status(400).send({error: "Id format wrong"})
        }) */
        // Error handling with errorHandler
        .catch(error => next(error))
})


// Add new person
app.post('/api/persons/', function (request,response, next) {
    const body = request.body

    // POST request headers
    //console.log("POST request headers", request.headers)

    // Error if name or number field is empty
    if (!body.name || !body.number) {
        return response.status(400).json({ error: 'Name or number is missing' })
    }

    // create new person object from request data
    const newPerson = new Person(
        {
            name : body.name,
            number : body.number,
        }
    )

    // Add new person to Mongo phonebook and return saved person
    newPerson.save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedAndFormattedPerson => { response.json(savedAndFormattedPerson) })
        .catch(error => next(error))
})

// Update exiting name with new number
app.put('/api/persons/:id', function (request, response, next) {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
        id: body.id
    }

    Person.findByIdAndUpdate(body.id, person, { runValidators: true, context: 'query' })
        .then(updatedPerson => {
            response.json(updatedPerson.toJSON())
        })
        .catch(error => next(error))
})

// Delete person based on id
app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {response.status(204).end()})
        .catch(error => next(error))
})


// Unknown endpoint
const unknownEndpoint = (request,response) => {
    response.status(404).send({ error: 'Unknown endpoint' })
}
app.use(unknownEndpoint)

// Middleware for error handling
const errorHandler = (error, request, response, next) => {
    console.log('errorHandler')
    console.error(error.message)
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    next(error)
}
app.use(errorHandler)

const port = process.env.PORT
app.listen(port)
console.log(`Server running on port ${port}`)

