const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    const User = sequelize.define("user", {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        group_name: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        socket_ID: {
            type: DataTypes.STRING
        },
        shopper: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    });

    return User;
};