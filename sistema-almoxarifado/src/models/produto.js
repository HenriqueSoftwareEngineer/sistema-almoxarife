// src/models/produto.js
const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    nome: String,
    categoria: String,
    quantidade: Number,
})

module.export = mongoose.model('Produto', produtoSchema)