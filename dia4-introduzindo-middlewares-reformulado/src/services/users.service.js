const users = require("../data/users.db");

const getActiveUsersService = () => {
    const activeUsers = users.filter((user) => user.active);

    if(activeUsers.length === 0) {
        throw new Error("USER_NOT_FOUND");
    }

    return activeUsers;
};

const getUsersByIdService = (id) => {
    const foundUser = users.find((user) => user.id === Number(id));

    if (!foundUser) {
        throw new Error("USER_NOT_FOUND");
    }
    return foundUser;
}

const getAdultActiveUsersService = () => {
    const activeUsers = getActiveUsersService();

    const activeAdultUsers = activeUsers.filter((user) => user.age >= 18);

    return activeAdultUsers;
}

module.exports = { getActiveUsersService, getUsersByIdService, getAdultActiveUsersService }