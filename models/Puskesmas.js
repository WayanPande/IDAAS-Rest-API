module.exports = (sequelize, DataTypes) => {
    const puskesmas = sequelize.define('Puskesmas', {
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
        tableName: 'puskesmas',
    });


    puskesmas.associate = models => {
        puskesmas.hasOne(models.Dokter, { foreignKey: 'id' });
    }
    return puskesmas;
}