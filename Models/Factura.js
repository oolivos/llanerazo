const {Schema, model} = require('mongoose')

const FacturaSchema = new Schema({
    consecutivo: {
        type: Number,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    clienteId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    }
})
module.exports = model('Factura', FacturaSchema)