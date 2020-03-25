
// Start server by "npm start"

// Ottaa käyttöö Noden sisäänrakennetun web-palvelimen
const http = require('http')

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




// Luodaan http-palvelin
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(persons))
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)

