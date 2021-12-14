const Results = require('../models/Result');
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
            const results = await Results.create({
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

        const user = await User.findByPk(user_id, {
            include: {
                association: 'results'
            }
        });

        const results = await Results.findAll({ user_id });       
        return res.json(results);
    },
    async destroy(req, res){
        const { id } = req.params;
        const user_id = req.headers.authorization;

        const result = await connection('results')
            .where('id', id)
            .select('user_id')
            .first();

        if(result.user_id !== user_id){

            return res.status(401).json({error: 'Operation not permitted'});
        }    

        await connection('results').where('id', id).delete();

        return res.status(204).send();
    }
};