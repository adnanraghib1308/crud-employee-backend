const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')
const { createEmployee, deleteEmployee, findEmployee, listEmployee, updateEmployee } = require('../dao/employee');

router.post('/create', createEmployee)
router.get('/delete/:id', deleteEmployee)
router.get('/find/:id', findEmployee)
router.get('/list', listEmployee)
router.post('/update/:id', updateEmployee)

module.exports = router;