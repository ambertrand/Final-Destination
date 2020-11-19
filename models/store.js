const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {

    const Store = sequelize.define("store", {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        group_ID: {
           type: DataTypes.INTEGER 
        },
        group_store_ID: {
            type: DataTypes.INTEGER
        },
        store_name: {
            type: DataTypes.STRING
        }
    });
    
    return Store;
}