const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");

const Book = new mongoose.Schema({
    titulo: { type: String, required: true },
    img: {type: String, required: false},
    descr: { type: String, required: true },
    paginas: { type: Number, required: true },
    trecho: { type: String },
    dataPub: { type: Date, required: true }
});

Book.plugin(mongoosePaginate);
module.exports = mongoose.model('Book', Book);

