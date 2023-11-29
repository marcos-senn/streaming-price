const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Currency',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            currency:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            buyPrice:{
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            sellPrice:{
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            updateDate:{
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: 'Currency', // Nombre de la tabla en la base de datos
          }
    )
}