const health = (req, res) => {
    res.status(200).json({ message: "ok" });
}

const users = (req, res) => {
    const { name, age } = req.body;
    
    if(!name) {
        return res.status(401).json({ message: "Nome é obrigatório." });
    }

    if(typeof age !== "number") {
        return res.status(401).json({ message: "Idade precisa ser um número." });
    }

    res.status(201).json({ 
        message: "Usuário criado com sucesso.",
        name,
        age
     })
}

const getUsers = (req, res) => {
    const { name } = req.params;

    res.status(200).json({ message: name })
}

const search = (req, res) => {
    const { term } = req.query;

    if(!term) {
        return res.status(401).json({ message: "Termo inválido!" });
    }

    res.status(200).json({ term });
}

const login = (req, res) => {
    const { email, password } = req.body;

    res.status(200).json({ email, password });
}

module.exports = {
    login,
    health,
    users,
    getUsers,
    search
}