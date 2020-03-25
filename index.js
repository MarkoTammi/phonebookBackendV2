
// Start server by "npm run dev"

// 
const express = require('express')
const app = express()

let persons = [
      {
        "name": "Marko",
        "number": "98989",
        "id": 12
      },
      {
        "name": "Pena",
        "number": "0909",
        "id": 15
      },
      {
        "name": "Kalle",
        "number": "7767676",
        "id": 16
      },
      {
        "name": "Jaska",
        "number": "88",
        "id": 17
      },
      {
        "name": "Ööö",
        "number": "8989",
        "id": 18
      },
      {
        "name": "Aaa",
        "number": "0900",
        "id": 19
      },
      {
        "name": "Äiti",
        "number": "909090",
        "id": 21
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


app.get('/api/persons', (req, res) => {
    res.json(persons)
    })


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)

