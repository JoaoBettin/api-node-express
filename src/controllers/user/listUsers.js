import user from '../../models/userModels.js'

const listUsers = async (req, res)=>{ 
    try{
        const [rows, fields] = await user.list()
        if (rows.lenght === 0){
            res.status(404).json({message : 'Users not found'})
        } else{
            res.json(rows)
        }
    }catch (err){
        console.error(err)
        res.status(500).json({message: 'Erro no servidor'})
    }
}

export default listUsers