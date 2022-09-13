module.exports = (sequelize, DataTypes) => {
    const riwayat_antibiotik = sequelize.define('Riwayat_Antibiotik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_visitasi: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        kombinasi_antibiotik: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        reaksi_obat: {
            type: DataTypes.TEXT,
        },
        efek_samping: {
            type: DataTypes.TEXT,
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
        tableName: 'riwayat_antibiotik',
    });

    riwayat_antibiotik.associate = models => {

        riwayat_antibiotik.belongsTo(models.Visitasi, { foreignKey: 'id_visitasi', as: 'riwayat_antibiotik' });

        riwayat_antibiotik.hasMany(models.Pemberian_Antibiotik, { foreignKey: 'id_riwayat_antibiotik', as: 'pemberian_antibiotik' });

    }

    return riwayat_antibiotik;
}