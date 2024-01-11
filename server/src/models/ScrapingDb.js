const {DataTypes} = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'ScrapingDb',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			data: {
				type: Sequelize.JSON,
			},
		},
		{timestamps: false},
	);
};
