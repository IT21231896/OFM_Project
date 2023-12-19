const express = require('express');
const router = express.Router();
const Employee = require('../Models/Employee');

// CREATE - Create a new employee
router.post('/create-employee', (req, res) => {
  const newEmployee = new Employee(req.body);
  newEmployee.save((err, employee) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(employee);
      res.status(201).json(employee);
    }
  });
});

// READ - Get a list of all employees
router.get('/', (req, res) => {
  Employee.find({}, (err, employees) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(employees);
      res.status(200).json(employees);
    }
  });
});

// READ - Get a single employee by ID
router.get('/:id', (req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(employee);
      res.status(200).json(employee);
    }
  });
});

// UPDATE - Update an employee by ID
router.put('/edit-employee/:id', (req, res) => {
  Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, employee) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(employee);
        res.status(200).json(employee);
      }
    }
  );
});

// DELETE - Delete an employee by ID
router.delete('/:id', (req, res) => {
  Employee.findByIdAndDelete(req.params.id, (err, employee) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(employee);
      res.status(200).json(employee);
    }
  });
});

module.exports = router;
