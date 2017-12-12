const mongoose = require('mongoose');
const Client = require('../models/client');

const postClient = (req, res, next) => {
    const newClient = new Client(req.body);
    newClient
     .save()
     .then(client => res.json(client));
}
const getClients = (req, res, next) => {
    Client.find()
     .then(clients => res.json(clients));
}
module.exports = {
    postClient,
    getClients
}