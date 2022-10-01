module.exports = (sequelize, DataTypes) => {
    const dokter = sequelize.define('Dokter', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        jenis_dokter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        jenis_spesialis_id: {
            type: DataTypes.INTEGER,
        },
        lokasi_praktek: {
            type: DataTypes.TEXT,
        },
        klinik_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rumah_sakit_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        poliklinik_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        puskesmas_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
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
        tableName: 'dokter',
    });


    dokter.associate = models => {

        dokter.belongsTo(models.Spesialis, { foreignKey: 'jenis_spesialis_id', as: 'jenis_spesialis' });

        dokter.belongsTo(models.Klinik, { foreignKey: 'klinik_id', as: 'klinik' });

        dokter.belongsTo(models.Rumah_Sakit, { foreignKey: 'rumah_sakit_id', as: 'rumah_sakit' });

        dokter.belongsTo(models.Klinik, { foreignKey: 'poliklinik_id', as: 'poliklinik' });

        dokter.belongsTo(models.Puskesmas, { foreignKey: 'puskesmas_id', as: 'puskesmas' });
    }


    return dokter;
}