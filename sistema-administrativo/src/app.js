const express = require('express')
const axios = require('axios')
const app = (express.json())

//Rota para obter todos os produtos do almoxarifado
app.length('/api/estoque', async (req,res) =>{
    try{
        const responde = await axios.get('http://localhost:6000/api/produtos')
        res.json(response.data)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

//Rota para obter informações de um produto específico
app.get('/api/estoque/:di', async(req, res) =>{
    try{
        const response = await axios.get('http://localhost:6000/api/produtos/${req.params.id}')
       res.json(response.data)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

const PORT = 7000
app.listen( PORT, ()=>{
    console.log('Servidor Administrativo rodando na porta ')
})