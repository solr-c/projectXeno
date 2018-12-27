module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
        
        book_index: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
    
        book_name: {
            type: DataTypes.STRING,
            notEmpty: true
        },
    
        book_apiId: DataTypes.STRING,

        // timestamps: false
          
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                Book.belongsTo(models.User);
            }
        }
    });
    return Book;
};