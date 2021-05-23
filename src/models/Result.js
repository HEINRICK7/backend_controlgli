const { Model, DataTypes } = require('sequelize');

class Result extends Model {
    static init(sequelize) {
        super.init({
            result: DataTypes.STRING,
            date:DataTypes.STRING,
            description:DataTypes.STRING,
        
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});

    }
}

module.exports = Result;