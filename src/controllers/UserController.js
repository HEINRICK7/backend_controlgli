const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.find();

        return res.json(users)
    },

    async store(req, res){
        const { first_name, last_name, date, email, password, role } = req.body;
        

        const user = await User.findOne({email})
        try {

            if(!first_name || !last_name || !date || !email || !password){
                return res.status(400).json({message: "Preencha todos os campos"})
            }
            else {

                if(user){
                    return res.status(400).json({message: "Existe um usuario cadastrado com esse email"})
                }
                else {

                    const user = await User.create({
                        first_name,
                        last_name,
                        date,
                        email,
                        password,
                        role
                    });
                
                    return res.status(200).json(user)
                
                }
            }
        } catch (error) {
            return res.status(500).json({error: "Error"})
        }  
    }
   
}