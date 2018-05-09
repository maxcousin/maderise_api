/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilisateur', {
    id_ut: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    statut: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    nom_ut: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    prenom_ut: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    log: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    mdp: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    tableName: 'utilisateur',
    timestamps: false,
    freezeTableName: true
  });
};
