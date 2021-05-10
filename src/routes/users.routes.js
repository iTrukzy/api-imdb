const express = require("express");
const route = express.Router();

const {
    getUsers,
    getOneUsers,
    addUsers,
    updateUsers,
    deleteUsers
} = require("../controllers/users.controller.js");
require('../assets/relations')

// endpoints
route.get("/users", getUsers);
route.get("/users/:id", getOneUsers);
route.post("/users", addUsers);
route.put("/users/:id", updateUsers);
route.delete("/users/:id", deleteUsers);

module.exports = route; 