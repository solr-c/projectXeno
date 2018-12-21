module.exports = function(sequelize, Sequelize) {
    var Tag = sequelize.define("tags", {
        tag_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
    
        tag_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
    
        active_search: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            notEmpty: true
        },

    
        status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active"
        }
    });
    
        return Tag;
    };