module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
        
        book_index: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
    
        book_name: {
            type: DataTypes.STRING,
            notEmpty: true
        },
    
        book_apiId: DataTypes.STRING,

        UserId: DataTypes.STRING,

          
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