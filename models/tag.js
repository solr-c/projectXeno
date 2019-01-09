module.exports = function(sequelize, DataTypes) {
    var Tag = sequelize.define("Tag", {

        tag_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            
        },
    
        tag_name: DataTypes.STRING,
            
        active_search: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        // timestamps: false
       
    }, {

        timestamps: false,
            classMethods: {
                associate: function(modules){
                    Tag.belongsTo(modules.User);
                }
            }
        // status: {
        // type: DataTypes.ENUM("active", "inactive"),
        // defaultValue: "active"
        // }
    });
    return Tag;
};