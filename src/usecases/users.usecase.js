const createError = require("http-errors");
const encrypt = require("../lib/encrypt");
const Users = require("../models/users.models");

async function create(userData) {
    const userFound = await Users.findOne({ email: userData.email });
    if (userFound) throw createError(409, "Email already in use");
    userData.password = await encrypt.encrypt(userData.password);
    const newUser = await Users.create(userData);
    return newUser;
}
async function getById(id) {
    const user = await Users.findById(id);
    return user;
} 
module.exports = {
    create,
    getById,
};
