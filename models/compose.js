/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compose', {
    x_mo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    y_mo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    z_mo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    modele_mo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    id_mo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'module',
        key: 'id_mo'
      }
    },
    id_pr: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'projet',
        key: 'id_pr'
      }
    }
  }, {
    tableName: 'compose',
    timestamps: false,
    freezeTableName: true
  });
};
