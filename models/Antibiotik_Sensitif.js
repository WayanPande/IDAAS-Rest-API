module.exports = (sequelize, DataTypes) => {
    const antibiotik_sensitif = sequelize.define('Antibiotik_Sensitif', {
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
        id_antibiotik: {
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
        tableName: 'antibiotik_sensitif',
    });

    antibiotik_sensitif.associate = models => {

        antibiotik_sensitif.belongsTo(models.Visitasi, { foreignKey: 'id_visitasi', as: 'antibiotik_sensitif' });

        antibiotik_sensitif.belongsTo(models.Antibiotik, { foreignKey: 'id_antibiotik', as: 'nama_antibiotik_sensitif' });

    }

    return antibiotik_sensitif;
}