module.exports = (sequelize, DataTypes) => {
    const visitasi = sequelize.define('Visitasi', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        pasien_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dx_sementara: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dx_definitif: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        jenis_perawatan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lama_dirawat: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tempat_praktek: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ruang_rawat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hasil_bakteri: {
            type: DataTypes.STRING,
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
        tableName: 'visitasi',
    });

    visitasi.associate = models => {

        visitasi.belongsTo(models.Pasien, { foreignKey: 'pasien_id', as: 'visitasi' });

        visitasi.hasMany(models.Spesimen, { foreignKey: 'id_visitasi', as: 'spesimen' });

        visitasi.hasMany(models.Antibiotik_Sensitif, { foreignKey: 'id_visitasi', as: 'antibiotik_sensitif' });

        visitasi.hasOne(models.Riwayat_Antibiotik, { foreignKey: 'id_visitasi', as: 'riwayat_antibiotik' });

    }

    return visitasi;
}