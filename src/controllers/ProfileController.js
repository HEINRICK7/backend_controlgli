const Result = require('../models/Result')

module.exports = {
    async index(req, res){
        
        const results = await Result.find().populate('user_id');

        return res.json(results)    

    }
}
