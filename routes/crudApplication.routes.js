module.exports = app => {
    const student = require("../controllers/crudApplication.controller.js");  
    var router = require("express").Router();
      
    // Create a new Student
    router.post("/", student.create);

    // Retrieve all Student
    router.get("/", student.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", student.findOne);

    // Update a Student with id
    router.put("/:id", student.update);

    // Delete a Student with id
    router.delete("/:id", student.delete);
  
    app.use('/api/v1/student', router);
};

