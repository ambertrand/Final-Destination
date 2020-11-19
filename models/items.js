const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    
    const Items = sequelize.define("items", {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        group_store_ID: {
            type: DataTypes.INTEGER
        },
        store_ID: {
            type: DataTypes.INTEGER
        },
        store_item: {
            type: DataTypes.STRING
        }
    });
    return Items;
}