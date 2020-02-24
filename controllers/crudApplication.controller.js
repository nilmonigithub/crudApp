const db = require("../models");
const Student = db.crudApplication;
const Op = db.Sequelize.Op;

// Create and Save a new Student
exports.create = (req, res) => {
  console.log("ffff");
  // Validate request
  if (!req.body.name) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
    return;
  }
// Create a Student
const student = {
    name: req.body.name,
    email: req.body.email,
    };

    // Save Student in the database
    Student.create(student)
    .then(data => {
        res.status(200).send({ message : "Successfully created", data});
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Student."
        });
    });
};