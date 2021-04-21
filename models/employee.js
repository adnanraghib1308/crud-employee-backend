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
    },
    password: {
        type: String,
        required: true,
        default: "defaultPassword"
    },
    role: {
        type: Number,
        default: 0
      }
})

module.exports = mongoose.model('Employee', employeeSchema)