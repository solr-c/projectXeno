module.exports = function(sequelize, DataTypes) {
   
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        userName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(modules) {
                // association can be defined here
                User.belongsToMany(models.User, { through: models.Friend, as: 'userFriend' });
                User.hasMany(models.Message);
            }
        }
    });
    return User;
};
