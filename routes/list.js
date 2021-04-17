const express = require('express')
const router = express()
const Employee = require('../models/employee.js')

router.get('/', async(req, res) => {
    await Employee.find((err, docs) => {
        if(err){
            res.send("Error " + err)
        }
        else{
            res.send(docs)
        }
    })
})

module.exports = router;