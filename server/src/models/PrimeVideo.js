const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'PrimeVideo',
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
            tableName: 'PrimeVideo', // Nombre de la tabla en la base de datos
          }
    )
}