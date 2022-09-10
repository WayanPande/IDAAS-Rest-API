module.exports = (sequelize, DataTypes) => {
    const klinik = sequelize.define('Klinik', {
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
        tableName: 'klinik',
    });

    klinik.associate = models => {
        klinik.hasOne(models.Dokter, { foreignKey: 'id' });
    }

    return klinik;
}