const Employee = require('../models/employee')

exports.createEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    employee.save((err, employee) => {
        if(err){
            res.status(400).json({
                error: "Not able to save employee in database"
            })
        }
        res.send(employee) 
    })
}

exports.deleteEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    employee.save((err, employee) => {
        if(err){
            res.status(400).json({
                error: "Not able to save employee in database"
            })
        }
        res.send(employee) 
    })
}

exports.findEmployee = async(req, res) => {
    await Employee.findById(req.params.id, (err, docs) => {
        if(err){
            res.send("Error " + err)
        }
        else{
            res.send(docs)
        }
    })
}

exports.listEmployee = async(req, res) => {
    await Employee.find((err, docs) => {
        if(err){
            res.send("Error " + err)
        }
        else{
            res.send(docs)
        }
    })
}

exports.updateEmployee = async (req, res) => {
	await Employee.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, employee) => {
        if(err){
            res.send("Error" + err)
        }
        else{
            res.send(employee)
        }
    } )
}