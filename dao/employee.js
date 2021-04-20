const mongoose = require('mongoose');

const dbcall = () => {
    mongoose.connect(
        process.env.DB_URL, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }, 
        () => {
        console.log('connected to database')
    })
}

module.exports = dbcall;