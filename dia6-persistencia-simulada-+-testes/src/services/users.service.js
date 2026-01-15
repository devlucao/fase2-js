const users = require("../data/users.db");

const createUserService = (data) => {
    const referenceId = users[users.length - 1].id;

    if(!data.name) {
        throw new Error("EMPTY_DATA");
    }

    if(typeof data.age !== "number") {
        throw new Error("INVALID_DATA");
    }

    const newUser = {
        id: referenceId + 1,
        name: data.name,
        age: data.age,
        active: true,
        role: data.role
    }

    users.push(newUser);
    return newUser;
}

const updateUserService = (id, data) => {
    const foundUserIndex = users.findIndex((user) => user.id === Number(id));

    if(foundUserIndex === -1) {
        throw new Error("USER_NOT_FOUND");
    }

    const updatedUser = {
        ...users[foundUserIndex],
        ...data
    }

    users[foundUserIndex] = updatedUser;

    return updatedUser
}

const deleteUserService = (id) => {
    const foundUserIndex = users.findIndex((user) => user.id === Number(id));

    if(foundUserIndex === -1) {
        throw new Error("USER_NOT_FOUND");
    }

    const [removedUser] = users.splice(foundUserIndex, 1); // armazena o usuário removido, porém só o splice já faria o delete

    return removedUser;
    
}

module.exports = { createUserService, updateUserService, deleteUserService };
