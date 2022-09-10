const Dokter = require("./Dokter");

module.exports = (sequelize, DataTypes) => {
    const spesialis = sequelize.define('Spesialis', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        tableName: 'spesialis',
    });


    spesialis.associate = models => {
        spesialis.hasOne(models.Dokter, { foreignKey: 'id' });
    }

    return spesialis;
}