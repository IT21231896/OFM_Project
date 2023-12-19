//back end (server side) schema creation for server connection
const mongoose = require('mongoose'); //add mongoose library
const { Schema } = mongoose;

//new Schema called - 'customerSchema'
let customerSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    custid: {
        type:String,
        required: true
    },
    mobileno: {
        type:Number,
        required: true
    },
    username: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    re_password: {
        type:String,
        required: true
    }

},{
    collation: { // Specify collation settings as an object
        locale: 'en_US', // Replace with the desired locale //it will use collation rules for English (United States) // format of <language(is lowercase)>_<REGION(is UPPERCASE)>
        strength: 1 // Replace with the desired strength(1)
    }
})

//export - model('any Model Name-first lettet should be capital' , 'schema Name') parameters.
module.exports = mongoose.model('Customer', customerSchema)
