module.exports = (sequelize, DataTypes) => {
    const pemberian_antibiotik = sequelize.define('Pemberian_Antibiotik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_riwayat_antibiotik: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_antibiotik: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        jalur_pemberian: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dosis: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lama_pemberian: {
            type: DataTypes.INTEGER,
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
        tableName: 'pemberian_antibiotik',
    });

    pemberian_antibiotik.associate = models => {

        pemberian_antibiotik.belongsTo(models.Antibiotik, { foreignKey: 'id_antibiotik', as: 'antibiotik' });

        pemberian_antibiotik.belongsTo(models.Riwayat_Antibiotik, { foreignKey: 'id_riwayat_antibiotik', as: 'pemberian_antibiotik' });


    }

    return pemberian_antibiotik;
}