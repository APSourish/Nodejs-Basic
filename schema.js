const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        requied: true
    },
    mobileno:{
        type: String,
        requied: true      
    },
    bloodGroup:{
        type: String,
        requied: true
    },
    address:{
        type: String,
        requied: true
    }
})

const model = mongoose.model('students',studentSchema)
module.exports = model
