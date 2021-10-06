const getAllUsers = (req, res) =>{
    res.send('Listado de usuarios')
}
const storeUsers = (req, res) =>{
    res.send('Almacenar usuario')
}
const updateUser = (req, res) =>{
    res.send('Actualizar usuario')
}
const deleteUser = (req, res) =>{
    res.send('Borrar usuario')
}

module.exports = {
    getAllUsers, storeUsers, updateUser, deleteUser
}