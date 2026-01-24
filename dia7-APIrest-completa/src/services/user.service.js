const users = require("../data/users.db");

const createUserService = (data) => {
  if(!data.email) {
    throw new Error("EMPTY_EMAIL");
  }

  const [userExists] = users.filter((user) => user.email === data.email);
  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const isValidEmail = validateEmail(data.email);

  const referenceId = users[users.length - 1].id;

  if(userExists) {
    throw new Error ("USER_ALREADY_EXISTS");
  }

  if(!data.displayName || data.displayName < 8) {
    throw new Error ("INVALID_DISPLAY_NAME");
  } 

  if(!isValidEmail) {
    throw new Error ("INVALID_EMAIL");
  }

  if(!data.password || data.password.length !== 6) {
    throw new Error ("INVALID_PASSWORD");
  }

  const newUser = {
    id: referenceId + 1,
    displayName: data.displayName,
    password: data.password,
    image: data.image,
  }

  users.push(newUser);

  return newUser;
}



module.exports = { createUserService }