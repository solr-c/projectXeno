module.exports = function(sequelize, Sequelize) {
    var Book = sequelize.define("books", {
        book_index: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
    
        book_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
    
        book_apiId: {
            type: Sequelize.STRING,
            notEmpty: true
        },

    
        status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active"
        }
    });

    Book.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Book.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    
        return Book;
    };