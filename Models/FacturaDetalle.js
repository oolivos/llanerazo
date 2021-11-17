const {Schema, model} = require('mongoose')

const FacturaDetalleSchema = new Schema({
    facturaId: {
        type: Schema.Types.ObjectId,
        ref: 'Factura',
        required: true
    },
    productoId:{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})
module.exports = model('FacturaDetalle', FacturaDetalleSchema)
/*
factura de venta
consecutivo: 89834
fecha: 12/3/2021
cliente: Oscar Olivos

producto       cantidad  precio unitario  Total
sombrero       5          100             500
botas          3          200             600
*/

//HTML & CSS ->  Aplico css por id, clase o por etiqueta