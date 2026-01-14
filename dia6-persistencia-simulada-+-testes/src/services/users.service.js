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

const updateUserService = (id) => {
    const foundUser = users.find((user) => user.id === Number(id));

    if(!foundUser) {
        throw new Error("USER_NOT_FOUND");
    }

    return foundUser;
}

module.exports = { createUserService, updateUserService };
