const users = require("../data/users.db");

const createUserService = (data) => {
  const [userExists] = users.filter((user) => user.email === data.email);
  
  const referenceId = users[users.length - 1].id;

  if(userExists) {
    throw new Error ("USER_ALREADY_EXISTS");
  }

  const newUser = {
    id: referenceId + 1,
    displayName: data.displayName,
    email: data.email,
    password: data.password,
    image: data.image,
  }

  users.push(newUser);

  return newUser;
}

const loginService = (email) => {
  const [userExists] = users.filter((user) => user.email === email);
  
  if(!userExists) {
    throw new Error("USER_NOT_EXISTS");
  }

  return 
}

const getUsersService = () => users;

const getUserByIdService = (id) => {
  const foundUser = users.find((user) => user.id === Number(id));

  if(!foundUser) {
    throw new Error("USER_NOT_FOUND");
  }

  return foundUser;
}

module.exports = { 
  createUserService,
  loginService,
  getUsersService,
  getUserByIdService
 }