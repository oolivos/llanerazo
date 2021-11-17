const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const rutas = require('./Routes/routes')

mongoose.connect(process.env.MONGO_CONNECTION)
mongoose.connection.on('connected', () => {
    console.log('Conectado a MongoDB')
})

const app = express()
app.use(express.json())
app.use(cors({
    origins: '*'
}))

//Incluir las rutas
app.use('/', rutas)

app.listen(process.env.APP_PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.APP_PORT}`)
})