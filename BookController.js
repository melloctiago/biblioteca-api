// Importando as dependências
const mongoose = require("mongoose");
const Book = mongoose.model("Book");

module.exports = {

    async index(req, res) {
        const {page =  1} = req.query
        const books = await Book.paginate({}, {page, limit: 10});
        return res.json(books);
    },
    async store(req, res) {
        const books = await Book.create(req.body);
        return res.json(books);
    },

    async show(req, res) {
        const books = await Book.findById(req.params.id);

        return res.json(books);
    },
    async update(req, res) {
        const books = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.json(books);
    },

    async delete(req, res) {
        await Book.findByIdAndDelete(req.params.id);
        return res.send({ msg: "Registro apagado com sucesso!" });
    },

};

