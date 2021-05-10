const express = require('express')
const route = express.Router()

const {
    postLogin
} = require("../controllers/login.controller.js");

route.post('/login', postLogin)



module.exports = route