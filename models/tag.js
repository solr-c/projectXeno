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

    Tag.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Tag.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    
        return Tag;
    };