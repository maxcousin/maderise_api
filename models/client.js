/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    id_cl: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nom_cl: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prenom_cl: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tel_cl: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mail_cl: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'client',
    timestamps: false,
    freezeTableName: true
  });
};
