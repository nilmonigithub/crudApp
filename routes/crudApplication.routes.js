module.exports = app => {
    const student = require("../controllers/crudApplication.controller.js");  
    var router = require("express").Router();
      
    // Create a new Student
    router.post("/", student.create);

  
    app.use('/api/v1', router);
};

