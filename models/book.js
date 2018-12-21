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
    
        return Book;
    };