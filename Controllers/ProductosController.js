const getAllProductos = (req, res) => {
    res.send('Lista de Productos')
}
const storeProductos = (req, res) => {
    res.send('Guardar Producto')
}
const updateProducto = (req, res) => {
    res.send('Actualizar Producto')
}
const deleteProducto = (req, res) => {
    res.send('Eliminar  Producto')
}

module.exports = {
    getAllProductos, storeProductos, updateProducto, deleteProducto
}