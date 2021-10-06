const express = require('express')
const rutas = require('./Routes/routes')

const app = express()
app.use(express.json())

//Incluir las rutas
app.use('/', rutas)

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})