require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const app = express();

const createEmployee = require('./routes/create');
const getAllEmployee = require('./routes/list');
const deleteEmployee = require('./routes/delete');
const updateEmployee = require('./routes/update');
const findEmployee = require('./routes/find');

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

app.use('/api/employee/create', createEmployee);
app.use('/api/employee/delete', deleteEmployee);
app.use('/api/employee/list', getAllEmployee);
app.use('/api/employee/update', updateEmployee);
app.use('/api/employee/find', findEmployee);

app.listen(process.env.PORT || 3001, ()=>{
	console.log("server started");
})