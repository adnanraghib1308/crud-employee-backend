require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const app = express();
const dbcall = require('./dao/employee');

const employeeRouter = require('./routes/employee');
const auth = require('./routes/auth')

mongoose.connect(
    process.env.DB_URL, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, 
    () => {
    console.log('connected to database')
})

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("index page works")
})

app.use('/api/employee', employeeRouter);
app.use('/api/auth/', auth);

app.listen(process.env.PORT || 3001, ()=>{
	console.log("server started");
})