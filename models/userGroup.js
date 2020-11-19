const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {

    const UserGroup = sequelize.define("UserGroup", {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        user_ID: {
            type: DataTypes.INTEGER 
        },
        group_ID: {
            type: DataTypes.INTEGER
        }
    });
    return UserGroup;
}