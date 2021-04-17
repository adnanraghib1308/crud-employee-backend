const express = require('express')
const router = express()
const Employee = require('../models/employee.js')

router.get('/:id', async(req, res) => {
    await Employee.findById(req.params.id, (err, docs) => {
        if(err){
            res.send("Error " + err)
        }
        else{
            res.send(docs)
        }
    })
})

module.exports = router;