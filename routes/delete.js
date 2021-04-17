const express = require('express')
const router = express.Router()
const Employee = require("../models/employee.js")

router.get('/:id', async (req, res) => {
	await Employee.findByIdAndRemove(req.params.id, (err, doc) => {
		if(!err){
			res.send(doc)
		}
		else{
			res.send('Error ' + err)
		}
	})
})

module.exports = router