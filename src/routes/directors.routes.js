const express = require("express");
const route = express.Router();

const {
  getDirectors,
  addDirectors,
  updateDirectors,
  deleteDirectors,
  getOneDirectors
} = require("../controllers/directors.controller.js");
require('../assets/relations')

// endpoints
route.get("/directors", getDirectors);
route.get("/directors/:id", getOneDirectors);
route.post("/directors", addDirectors);
route.put("/directors/:id", updateDirectors);
route.delete("/directors/:id", deleteDirectors);

module.exports = route;