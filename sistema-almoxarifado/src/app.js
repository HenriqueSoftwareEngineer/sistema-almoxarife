const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

//Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/almoxarifadodB', {
    userNewUrlParser:true,
    useUnifiedTopology:true,
});

//Modelo de dados para os produtos
const produtoSchema = new mongoose.Schem({
    nome: String,
    categoria:String, //Ex:ferramenta, material de escritório
    quantidade: Number,

})

const Produto = mongoose.model('Produto', produtoSchema)

//Rota para obter todos os produtos
app.get('/api/produtos', async(req,res) =>{
    try{
        const produtos = await Produto.find()
        res.json(produtos)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

//Rota para onbter um produto por ID
app.get('/api/produtos/:id', async (req, res) =>{
    try{
        const produto = await Produto.findById(req.params.id)
        if(produto){
            res.json(produto)
        }else{
            res.status(404).json({message: 'Produto não encontrado'})
        }
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})


//Rota para adicionar um novo produto
app.post('/api/produtos', async (req,res) =>{
    const{nome, categoria, quantidade} = req.body
    const produto = new Produto({nome, categoria, quantidade})
    try{
        await produto.save()
        res.status(201).json(produto)
    }catch (err){
        res.status(400).json({message:err.message})
    }
})

const PORT = 6000
app.listen(PORT, () =>{
    console.log(`Servidor de Almoxarifado rodando na porta ${PORT}`)
})