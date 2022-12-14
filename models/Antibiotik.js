module.exports = (sequelize, DataTypes) => {
    const antibiotik = sequelize.define('Antibiotik', {
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
        tableName: 'antibiotik',
    });

    antibiotik.associate = models => {

        antibiotik.hasMany(models.Antibiotik_Sensitif, { foreignKey: 'id_antibiotik', as: 'nama_antibiotik_sensitif' });

        antibiotik.hasMany(models.Pemberian_Antibiotik, { foreignKey: 'id_antibiotik', as: 'antibiotik' });

    }

    return antibiotik;
}