const Usuario = require('../Models/Usuario')

const getAllUsers = async (req, res) =>{
    res.json(await Usuario.find())
}
const storeUsers =  async (req, res) =>{
    // res.send('Almacenar usuario')
    const newUser = new Usuario(req.body)
    await newUser.save()
    res.json(newUser)
}
const updateUser =  async (req, res) =>{
    const id = req.params.id
    const userUpdate = req.body
    //const user = await Usuario.findById(id)
    await Usuario.findByIdAndUpdate(id, userUpdate )
    res.send('Actualizado!!')
}
const deleteUser = async (req, res) =>{
    await Usuario.findByIdAndDelete(req.params.id)
    res.send('Usuario borrado!')
}

// CRUD

module.exports = {
    getAllUsers, storeUsers, updateUser, deleteUser
}