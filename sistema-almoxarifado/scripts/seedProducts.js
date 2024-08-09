// scripts/seedProducts.js

const mongoose = require('mongoose')
const Produto = require('../src/models/produto')


mongoose.connect('mongodb://localhost:27017/almoxarifadoDB',{
    userNewUrlParser: true,
    useUnifiedTopology: true,
})


const produtos = [
    { nome: 'Extintor de Incêndio - Água Pressurizada', categoria: 'Equipamento de Combate a Incêndio', quantidade: 10 },
    { nome: 'Extintor de Incêndio - Pó Químico Seco (PQS)', categoria: 'Equipamento de Combate a Incêndio', quantidade: 20 },
    { nome: 'Extintor de Incêndio - CO₂ (Dióxido de Carbono)', categoria: 'Equipamento de Combate a Incêndio', quantidade: 15 },
    { nome: 'Extintor de Incêndio - Espuma Mecânica', categoria: 'Equipamento de Combate a Incêndio', quantidade: 5 },
    { nome: 'Mangueira de Incêndio - Tipo 1', categoria: 'Acessórios de Combate a Incêndio', quantidade: 30 },
    // Continue a lista até incluir os 50 produtos...
    { nome: 'Caixa de Alarme Manual', categoria: 'Sistema de Alarme de Incêndio', quantidade: 5 },
]


Produto.insertMany(produtos)
.then(()=>{
    console.log('Produto registrado com sucesso!')
    mongoose.connection.close()
})
.catch(err =>{
    console.error('Erro ao registrar produtos', err)
})