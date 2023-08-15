import express from 'express'

const router = express.Router()

router.get('/', (req, res)=>{
    const users = [
        {id: 1, name: "João"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Pedro"},
    ]
    res.json(users)
})

router.post('/', (req, res)=>{
    const dados = req.body
    res.json({
        message: "Usuário criado com sucesso!",
        dados: dados
    })
})

router.put('/', (req, res)=>{
    res.json({message: "Usuário atualizado com sucesso!"})
})

router.delete('/', (req, res)=>{
    res.json({message: "Usuário removido com sucesso!"})
})

export default router