import product from '../../models/productModel.js'

const listUsers = async (req, res)=>{
    try {
        const [rows, fields] = await product.list()
        if(rows.length === 0){
            res.status(404).json({message: 'Nenhum usuario encontrado.'})
        }else {
            res.json(rows)
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Erro no Servidor'})
    }
}

export default listUsers