module.exports = (sequelize, DataTypes) => {
    const Rumah_Sakit = sequelize.define('Rumah_Sakit', {
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
        tableName: 'rumah_sakit',
    });

    Rumah_Sakit.associate = models => {
        Rumah_Sakit.hasOne(models.Dokter, { foreignKey: 'id' });
    }

    return Rumah_Sakit;
}