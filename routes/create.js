const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')

router.post('/', (req, res) => {
    const employee = new Employee(req.body);
    employee.save((err, employee) => {
        if(err){
            res.status(400).json({
                error: "Not able to save employee in database"
            })
        }
        res.send(employee) 
    })
})

module.exports = router;