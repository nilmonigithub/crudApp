module.exports = (sequelize, Sequelize) => {
    const crudApplication = sequelize.define("student", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    return crudApplication;
  };