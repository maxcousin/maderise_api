/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fournisseur', {
    id_fo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nom_fo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tel_fo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mail_fo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'fournisseur',
    timestamps: false,
    freezeTableName: true
  });
};
