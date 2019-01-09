module.exports = function(sequelize, DataTypes) {
var User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firstname: {
        type: DataTypes.STRING,
        notEmpty: true
    },

    lastname: {
        type: DataTypes.STRING,
        notEmpty: true
    },

    username: {
        type: DataTypes.TEXT
    },

    email: {
        type: DataTypes.STRING,
        validate: {
        isEmail: true
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    last_login: {
        type: DataTypes.DATE
    },
    
    mybooks: {
        type: DataTypes.STRING
    },

    mytags: {
        type: DataTypes.STRING
    },



    status: {
    type: DataTypes.ENUM("active", "inactive"),
    defaultValue: "active"
    }
});

    User.associate = function(models){



        User.hasMany(models.Tag, {
            onDelete: "cascade"
        });

        User.hasMany(models.Book, {
            onDelete: "cascade"
        });
    };

    return User;
};
