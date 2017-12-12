const route = require('express').Router();
const clientCtrl = require('../controllers/clientCtrl');

route.post('/clients', clientCtrl.postClient);
route.get('/clients', clientCtrl.getClients);

module.exports = route;