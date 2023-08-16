const createUser =  (req, res)=>{
    //Create
    const dados = req.body

    res.json({
        message: "Usuário criado com sucesso",
        dados: dados
    })
}

export default createUser