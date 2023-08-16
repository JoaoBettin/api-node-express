import user from '../../models/userModels.js'

const createUser =  async (req, res)=>{
    try{
        const user = req.body
        const res = await user.create(user)
        console.log(res)
        const [result] = res
        if (result.affectedRows === 1) {
            res.status(201).json{(message: 'User Created'),
        
        }
        }
    } catch{
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
}

export default createUser