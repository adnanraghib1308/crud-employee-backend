const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')

router.post('/create', (req, res) => {
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

router.get('/delete/:id', async (req, res) => {
	await Employee.findByIdAndRemove(req.params.id, (err, doc) => {
		if(!err){
			res.send(doc)
		}
		else{
			res.send('Error ' + err)
		}
	})
})

router.get('/find/:id', async(req, res) => {
    await Employee.findById(req.params.id, (err, docs) => {
        if(err){
            res.send("Error " + err)
        }
        else{
            res.send(docs)
        }
    })
})

router.get('/list', async(req, res) => {
    await Employee.find((err, docs) => {
        if(err){
            res.send("Error " + err)
        }
        else{
            res.send(docs)
        }
    })
})

router.post('/update/:id', async (req, res) => {
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