const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
      id: Number,
      brand: String,
      visited: Boolean,
      type: String,
      updated: {
        type: Date,
        default: 0
      },
});

const modelSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    id_brand: {
        type: String,
    },
    model: {
        type: String,
    },
    type: {
        type: String,
    },
    visited: Boolean,

    updated: {
        type: Date,
        default: 0
      },
});




const brandModel = mongoose.model('brand', brandSchema)
const modelModel = mongoose.model('model', modelSchema)

module.exports = {

    brandModel,
    modelModel
}