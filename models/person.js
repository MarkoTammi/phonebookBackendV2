

// MONGO DB definitions


const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

// define url to mongo db
const url = process.env.MONGODB_URI
//console.log('Connecting to .... ', url)

// Connect to mongo db
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB: ', error.message)
    })


// schema and model for name and number
// with validation criterias
const personSchema = new mongoose.Schema({
// Used without mongoose-unique-validator
/*     name: String,
    number: String */

    name: {
        type:String,
        minlength: 3,
        required: true,
        unique: true
    },
    number: {
        type: String,
        minlength: 5,
        required: true
    }
})

// excute check that name and number exist and are valid
// and name is unique
personSchema.plugin(uniqueValidator)

//toJSON metodi which convert result from Mongo to string
personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id // remove _id field
        delete returnedObject.__v // remove __v field
    }
})

module.exports = mongoose.model('Person', personSchema)