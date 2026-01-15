const { createUserService, updateUserService, deleteUserService } = require("../services/users.service");

const home = (req, res) => res.status(200).json(req.body);

const createUser = (req, res) => {
    try{
        const newUser = createUserService(req.body);
    
        return res.status(201).json(newUser);
    } catch (error) {
        if(error.message === "EMPTY_DATA") {
            return res.status(401).json({ error: "O campo nome é de preenchimento obrigatório." });
        }
        if(error.message === "INVALID_DATA") {
            return res.status(401).json({ error: "A idade precisa ser um valor numérico" });
        }
    }
    return res.status(500).json({ error: "Erro interno." });
}   

const updateUser = (req, res) => {
    try{
        const { name, age, active } = req.body;
        const { id } = req.params;
        const user = updateUserService(id, { name, age, active });
    
        return res.status(200).json(user);

    } catch (error) {
        if(error.message === "USER_NOT_FOUND") {
            return res.status(404).json({ error: "Usuário não encontrado!" });
        }
    }
    return res.status(500).json({ error: "Erro interno." });
}

const deleteUser = (req, res) => {
    try{
        const { id } = req.params;
    
        deleteUserService(id);
        return res.status(202).json();
    } catch (error) {
        if(error.message === "USER_NOT_FOUND") {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }
    }
    return res.status(500).json({ error: "Erro interno!" });
}

module.exports = { 
    home,
    createUser,
    updateUser,
    deleteUser
}