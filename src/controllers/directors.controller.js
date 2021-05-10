const {Directors} = require('../models') 


const getDirectors = async (req, res) => {
    try {
        const response = await Directors.findAll({raw: true})
        res.json({
            directors: response
        })
    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const getOneDirectors = async (req, res) => {
    const id = req.params.id
    try {
        const response = await Directors.findOne({where: {id}})
        res.json({
            directors: response
        })
    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const addDirectors = async (req, res) => {
    const {first_name,last_name,dob,biography,profile_photo,active}= req.body;
    try {
        await Directors.create({first_name,last_name,dob,biography,profile_photo,active})
        res.status(201).json({
            created: true,
            message: "Director was created" 
        })
    } catch(err){
        res.status(500).json({
            created: false,
            message: err.message
        })
    }
}

const updateDirectors = async (req, res) => {
    const id = req.params.id;
    const {first_name,last_name,dob,biography,profile_photo,active}= req.body;
    try {
        await Directors.update({first_name,last_name,dob,biography,profile_photo,active}, {where: {
            id: id
        }})
        res.status(200).json({
            updated: true,
            message: "Director was updated" 
        })
    } catch(err){
        res.status(500).json({
            updated: false,
            message: err.message
        })
    }
}

const deleteDirectors = async (req, res) => {
    const id = req.params.id;
    try {
        await Directors.destroy({where: {id: id}})
        res.status(200).json({
            deleted: true,
            message: "Director was deleted" 
        })
    } catch(err){
        res.status(500).json({
            deleted: false,
            message: err.message
        })
    }
}




module.exports = {
    getDirectors,
    getOneDirectors,
    addDirectors,
    updateDirectors,
    deleteDirectors
}