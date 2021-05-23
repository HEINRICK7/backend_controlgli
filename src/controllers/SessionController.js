const User = require('../models/User');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json')



module.exports = {
    async store(req, res) {
        const {email, password } = req.body;

        const user = await User.findOne({where: { email } })

        if(!user){
            res.status(400).json({
                error: "Nenhum usuário com esse email"
            })
        }
        if(!bcrypt.compare(password, user.password)){
            return res.status(400).send({ error: ' Invalid password' });   
    
        }

        user.password = undefined;    
        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400,
           }); 
           
           res.send({user, token});
            
        
    }
        
    
}