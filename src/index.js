import express from 'express'
import {PORT} from './config.js'

import logger from './middlewares/logger.js'
import bodyParser from 'body-parser'

import userRoute from './router/userRoute.js'
import productRoute from './router/productRoute.js'

const api = express()

api.use(logger)
api.use(bodyParser.json())

api.get('/', (req, res)=>{
    res.json({message: "Tudo certo!"})
})

api.use('/user', logger, userRoute)

api.use('/product', productRoute)

api.all('*', (req, res)=>{
    res.status(404).send("Erro 404 - Página não encontrada")
})

api.listen(PORT, () => {
    console.clear()
    console.log(`Servidor tá rodando na porta http://localhost:${PORT}`)
})