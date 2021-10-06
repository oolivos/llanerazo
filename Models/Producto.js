const {Schema, model} = require('mongoose')

const ProductoSchema = new Schema({
    codigo: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})
module.exports = model('Producto', ProductoSchema)
