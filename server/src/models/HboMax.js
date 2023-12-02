const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'HboMax',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            planName:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            planPrice:{
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: 'HboMax', // Nombre de la tabla en la base de datos
          }
    )
}