module.exports = function(sequelize, DataTypes) {
   
    var Friend = sequelize.define("Friend", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        inviteStatus: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(modules) {
                // association can be defined here
                Friend.belongsTo(modules.User, {as: "userFriend"});
                Friend.hasMany(models.Message);
            }
        }
    });
    return Friend;
};