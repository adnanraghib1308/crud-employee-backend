const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
	name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    designation: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Employee', employeeSchema)