const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {

    const Group = sequelize.define("group", {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        group_name: {
            type: DataTypes.STRING
        },
        chat_message: {
            type: DataTypes.JSON
        }
    });
    return Group;
}