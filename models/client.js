const mongoose = require('mongoose');
const db = require('../config/db');

const Schema = mongoose.Schema;

const clientSchema = new Schema(
    {
        name: { type: String, required: [true, 'This field is required']},
        age: { type: Number, required: [true, 'This field is required']},
    }, {
        versionKey: false
    }
);

module.exports = db.model('clients', clientSchema);