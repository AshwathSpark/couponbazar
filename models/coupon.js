const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Couponschema = new Schema({
    brand: String,
    description: String,
    code: String,
    prize: Number,
    name: String,
    phone: String,
    bou: String
});

module.exports = mongoose.model('Coupon',Couponschema);