const { createUserService, updateUserService } = require("../services/users.service");

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
    const { name, age, active } = req.body;
    const { id } = req.params;
    let user = updateUserService(id);

    user = {
        id: user.id,
        name,
        age,
        active,
        role: user.role
    }

    return res.status(200).json(user);
}

module.exports = { 
    home,
    createUser,
    updateUser
}