const Result = require('../models/Result');
const User = require('../models/User')

module.exports = {
    
    async store(req, res){
        const { user_id } = req.params;
        const { result, date, description } = req.body;

        const user = await User.findOne({user_id});
        try {
            if(!user) {
                return res.status(400).json({error: 'Usuario nao encontrado'})            
            }else {
            const results = await Result.create({
                result,
                date,
                description,
                user_id
            });
    
            return res.json(results);

            }
    
            
        } catch (error) {
            return res.status(500).json({error: "error"});
        }
       
        
    },
    async index(req, res){
        const { user_id } = req.params;
        const results = await Result.find({user_id}).populate('user_id')

        return res.json(results)    
    
    
    },
    async destroy(req, res){
        try {
            await Result.findByIdAndRemove(req.params._id);
             res.status(200).send({
                 message: 'Arquivo removido com sucesso!'
             })
         } catch (error) {
 
            res.status(400).send({ error: 'Error deleting'});
             
         }
    }
};