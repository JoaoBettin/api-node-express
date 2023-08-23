import product from '../../models/productModel.js'

const getProduct = async (req, res)=>{
    try {
        const [rows, fields] = await product.get(req.body.id)
        if(rows.length === 0){
            res.status(404).json({message: 'User not found.'})
        }else {
            delete rows[0].pass
            res.json(rows[0])
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Erro no Servidor'})
    }
}

export default getProduct