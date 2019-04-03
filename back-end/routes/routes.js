const routes = require('express').Router();
const controller = require('../controllers');

/* controllers will be imported from the controllers folder */
routes.post('/cigv/api/recieveFile/',controller.recieveFile);

module.exports = routes;