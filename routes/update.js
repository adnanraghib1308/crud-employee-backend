const express = require('express')
const router = express.Router()
const Employee = require("../models/employee.js")

router.post('/:id', async (req, res) => {
	await Employee.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, employee) => {
        if(err){
            res.send("Error" + err)
        }
        else{
            res.send(employee)
        }
    } )
})

module.exports = router;