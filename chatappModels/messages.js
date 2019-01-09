module.exports = function(sequelize, DataTypes) {
   
    var Message = sequelize.define("Message", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        text: DataTypes.STRING,
        date: DataTypes.DATE,
        password: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(modules) {
                // association can be defined here
                Message.belongsTo(modules.Friend);
            }
        }
    });
    return Message;
};