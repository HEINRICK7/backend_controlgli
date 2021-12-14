
const mongoose = require('../database');

const ResultSchema = new mongoose.Schema({
    
    result: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user_id:[{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User',
        require: true
    }]
});

const Result= mongoose.model('Result', ResultSchema);

module.exports = Result;
