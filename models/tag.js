module.exports = function(sequelize, DataTypes) {
    var Tag = sequelize.define("Tag", {

        tag_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
    
        tag_name: DataTypes.STRING,
            
        active_search: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        UserId: DataTypes.STRING
       
    }, {

        timestamps: false,
            classMethods: {
                associate: function(modules){
                    Tag.belongsTo(modules.User);
                }
            }
    });
    return Tag;
};