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

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${title}%` } } : null;
  
    Student.findAll({ where: condition })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Students."
        });
      });
  };
  
  // Find a single Student with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Student.findByPk(id)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Student with id=" + id
        });
      });
  };
  
  // Update a Student by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Student.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Student was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Student with id=" + id
        });
      });
  };
  
  // Delete a Student with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Student.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Student was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Student with id=" + id
        });
      });
  };
  
  