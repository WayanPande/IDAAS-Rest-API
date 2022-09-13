module.exports = (sequelize, DataTypes) => {
    const pasien = sequelize.define('Pasien', {
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
        tanggal_lahir: {
            type: DataTypes.DATE,
            allowNull: false
        },
        no_hp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alamat: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        komorbid: {
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
        tableName: 'pasien',
        paranoid: true,
    });

    pasien.associate = models => {

        pasien.hasOne(models.Visitasi, { foreignKey: 'pasien_id', as: 'visitasi' });

    }

    return pasien;
}