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
        auth0_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        group_name: {
            type: DataTypes.STRING,
            allowNull: false
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