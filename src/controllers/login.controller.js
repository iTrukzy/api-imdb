const {Users} = require('../models') 
const bcrypt = require('bcryptjs')

const postLogin = async (req, res) => {
    const {email, password} = req.body

    try {
        const response = await Users.findOne({where: {email: email}, raw: true})
        const result = bcrypt.compareSync(password, response.password)
        console.log(result)
    }
    catch(err) {
        res.json({
            login: false,
            message: err.message
        })
    }
}


module.exports = {
    postLogin
}