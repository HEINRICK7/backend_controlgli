const User = require('../models/User')
const bcrypt = require('bcryptjs');
const { index } = require('./ResultController');


module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users)
    },

    async store(req, res){
        const { first_name, last_name, date, email, password } = req.body;
        
        const hash = bcrypt.hashSync(password, 10)

    const user = await User.findOne({where: {email}})
    try {
        
        if(!first_name || !last_name || !date || !email || !password){
            return res.status(400).json({message: "Preencha todos os campos"})
        }
        else {

            if(user){
                return res.status(400).json({message: "Existe um usuario cadastrado com esse email"})
            }
            else {

                const users = await User.create({
                    first_name,
                    last_name,
                    date,
                    email,
                    password: hash,
                });
                user.password = undefined;
                
                return res.json(users)
            
            }
        }
    } catch (error) {
        return res.status(500).json({error: "Error"})
    }  
    }
   
}