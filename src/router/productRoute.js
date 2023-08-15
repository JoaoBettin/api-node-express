import express from 'express'

const router = express.Router()

router.get('/', (req, res)=>{
    const products = [
        {id: 1, name: "Leite"},
        {id: 2, name: "Queijo"},
        {id: 3, name: "Pão"},
    ]
    res.json(products)
})

router.post('/', (req, res)=>{
    const dados = req.body
    console.log(dados.nome)

    res.json({
        message: "Produto criado com sucesso!",
        dados: dados
    })
})

router.put('/', (req, res)=>{
    const produtoAtualizado = req.body
    console.log(produtoAtualizado.produto)

    res.json({
        message: "Produto atualizado com sucesso!",
        produto: produtoAtualizado
    })
})

router.delete('/', (req, res)=>{
    res.json({message: "Produto removido com sucesso!"})
})

export default router