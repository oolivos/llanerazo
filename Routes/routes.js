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
Router.put('/usuarios/update', updateUser)
Router.delete('/usuarios/delete', deleteUser)

//Rutas de Productos
Router.get('/productos', getAllProductos)
Router.post('/productos/store', storeProductos)
Router.put('/productos/update', updateProducto)
Router.delete('/productos/delete', deleteProducto)

module.exports = Router