const express = require("express");
const route = express.Router();

const {
  getActors,
  addActors,
  updateActors,
  deleteActors,
  getOneActors
} = require("../controllers/actors.controller.js");
require('../assets/relations')

// endpoints
route.get("/actors", getActors);
route.get("/actors/:id", getOneActors);
route.post("/actors", addActors);
route.put("/actors/:id", updateActors);
route.delete("/actors/:id", deleteActors);

module.exports = route;
