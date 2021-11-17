const express = require('express')
const Router = express.Router()

const {
    getAllUsers, 
    storeUsers, 
    updateUser, 
    deleteUser
} = require('../Controllers/UsuariosController')
const {
    getAllProductos, 
    storeProductos, 
    updateProducto,
    deleteProducto
} = require('../Controllers/ProductosController')

//Rutas de Usuarios
Router.get('/usuarios', getAllUsers)
Router.post('/usuarios/store', storeUsers)
Router.put('/usuarios/update/:id', updateUser)
Router.delete('/usuarios/delete/:id', deleteUser)

//Rutas de Productos
Router.get('/productos', getAllProductos)
Router.post('/productos/store', storeProductos)
Router.put('/productos/update/:id', updateProducto)
Router.delete('/productos/delete/:id', deleteProducto)

module.exports = Router