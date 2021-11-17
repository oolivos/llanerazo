const Factura = require('../Models/Factura')
const FacturaDetalle = require('../Models/FacturaDetalle')

const index = async (req, res) => {
    res.json(await Factura.find())
}

const createFactura = async(req, res) => {
    const facturaData = req.body
    const factura = new Factura(
        {
            clienteId: facturaData.clienteId
        }
    )
    await factura.save()

    facturaData.detalle.map(item => {
        detalle.facturaId = factura._id
        await (new FacturaDetalle(item)).save()
    })
}

const deleteFactura = async (req, res) => {
    await Factura.findByIdAndUpdate(
        req.params.id,
        {
            estado: false
        }
    )
}