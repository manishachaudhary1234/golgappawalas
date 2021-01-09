module.exports = (app) => {
  const customers = require('../controllers/customer.controller');

  // Create a new Customer
  app.post('/customers', customers.create);
  //app.get('/customers', customers.findAll);
};
