
/* 

Test file for mondo db
Command line use example
node mongo.js <password>
>> display all data from mongo

*/


const mongoose = require('mongoose')

// password is missing
if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

// open connection to mongo db
const url =
  `mongodb+srv://mongofllstck:${password}@cluster0-lav4r.mongodb.net/phonebook?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

// create schema and model for name and number
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: String
})
const Person = mongoose.model('Person', personSchema)


//if only password is given names and numbers are fetched and displayed -> exit
if ( process.argv.length === 3 ){
    console.log('phonebook:')
    Person
    .find({})
    .then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
        process.exit(2)
    })
}


// person name and number is given as comman line parameter
const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
  id: process.argv[5]
})
person
    .save()
    .then(result => {
        console.log('added ' + process.argv[3] + ' number ' + process.argv[4] + ' to phonebook')
        mongoose.connection.close()
    })