const {Users} = require('../models') 
const bcrypt = require('bcryptjs')

let salt = bcrypt.genSaltSync(10)


const getUsers = async (req, res) => {
    try {
        const response = await Users.findAll({raw: true})
        res.json({
            users: response
        })
    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const getOneUsers = async (req, res) => {
    const id = req.params.id
    try {
        const response = await Users.findOne({where: {id}})
        res.json({
            users: response
        })
    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const addUsers = async (req, res) => {
    const {first_name,last_name,email,password,reset_token,active}= req.body;
    const hash = bcrypt.hashSync(password, salt)
    try {
        await Users.create({first_name,last_name,email,password: hash,reset_token,active})
        res.status(201).json({
            created: true,
            message: "User was created" 
        })
    } catch(err){
        res.status(500).json({
            created: false,
            message: err.message
        })
    }
}

const updateUsers = async (req, res) => {
    const id = req.params.id;
    const {first_name,last_name,email,password,reset_token,active}= req.body;
    const hash = bcrypt.hashSync(password, salt)
    try {
        await Users.update({first_name,last_name,email,password: hash,reset_token,active}, {where: {
            id: id
        }})
        res.status(200).json({
            updated: true,
            message: "User was updated" 
        })
    } catch(err){
        res.status(500).json({
            updated: false,
            message: err.message
        })
    }
}

const deleteUsers = async (req, res) => {
    const id = req.params.id;
    try {
        await Users.destroy({where: {id: id}})
        res.status(200).json({
            deleted: true,
            message: "User was deleted" 
        })
    } catch(err){
        res.status(500).json({
            deleted: false,
            message: err.message
        })
    }
}




module.exports = {
    getUsers,
    getOneUsers,
    addUsers,
    updateUsers,
    deleteUsers
}