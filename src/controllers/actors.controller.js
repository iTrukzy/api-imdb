const express = require('express')
const {Actors} = require('../models') 


const getActors = async (req, res) => {
    try {
        const response = await Actors.findAll({raw: true})
        res.json({
            actors: response
        })
    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const getOneActors = async (req, res) => {
    const id = req.params.id
    try {
        const response = await Actors.findOne({where: {id}})
        res.json({
            actors: response
        })
    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const addActors = async (req, res) => {
    const {first_name,last_name,dob,biography,profile_photo,active}= req.body;
    try {
        await Actors.create({first_name,last_name,dob,biography,profile_photo,active})
        res.status(201).json({
            created: true,
            message: "Actor was created" 
        })
    } catch(err){
        res.status(500).json({
            created: false,
            message: err.message
        })
    }
}

const updateActors = async (req, res) => {
    const id = req.params.id;
    const {first_name,last_name,dob,biography,profile_photo,active}= req.body;
    try {
        await Actors.update({first_name,last_name,dob,biography,profile_photo,active}, {where: {
            id: id
        }})
        res.status(200).json({
            updated: true,
            message: "Actor was updated" 
        })
    } catch(err){
        res.status(500).json({
            updated: false,
            message: err.message
        })
    }
}

const deleteActors = async (req, res) => {
    const id = req.params.id;
    try {
        await Actors.destroy({where: {id: id}})
        res.status(200).json({
            deleted: true,
            message: "Actor was deleted" 
        })
    } catch(err){
        res.status(500).json({
            deleted: false,
            message: err.message
        })
    }
}




module.exports = {
    getActors,
    getOneActors,
    addActors,
    updateActors,
    deleteActors
}