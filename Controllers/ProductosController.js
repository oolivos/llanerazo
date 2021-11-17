const Producto = require('../Models/Producto')

const getAllProductos = async (req, res) => {
    //res.send('Lista de Productos')
    return res.json(await Producto.find().populate('userId'))
}
const storeProductos = async (req, res) => {
    //res.send('Guardar Producto')
    const producto = new Producto(req.body)
    await producto.save()
    res.json(producto)
}
const updateProducto = async (req, res) => {
    //res.send('Actualizar Producto')
    await Producto.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    res.send('actualizado!')
}
const deleteProducto = async (req, res) => {
    //res.send('Eliminar  Producto')
    await Producto.findByIdAndDelete(req.params.id)
    res.send('Eliminado!')
}

module.exports = {
    getAllProductos, storeProductos, updateProducto, deleteProducto
}