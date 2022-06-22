const express = require('express');
//controls
const {
	getAllEmployes,
	createEmployee,
	getEmployeeById,
	updateEmployee,
	deleteEmploye,
} = require('../controllers/employeesControler');


const employeesRouter = express.Router();

employeesRouter.get('/', getAllEmployes);

employeesRouter.get('/:id', getEmployeeById);

employeesRouter.post('/', createEmployee);//marcar hora de entrada.

employeesRouter.patch('/:id', updateEmployee);//marcar hora de salida.

employeesRouter.delete('/:id', deleteEmploye);


module.exports = { employeesRouter };