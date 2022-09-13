module.exports = (sequelize, DataTypes) => {
    const spesimen = sequelize.define('Spesimen', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_visitasi: {
            type: DataTypes.INTEGER,
        },
        name: {
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
        tableName: 'spesimen',
    });

    spesimen.associate = models => {

        spesimen.belongsTo(models.Visitasi, { foreignKey: 'id_visitasi', as: 'spesimen' });

    }

    return spesimen;
}