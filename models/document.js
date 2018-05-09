/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('document', {
    id_do: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ref_do: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_crea: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_pr: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'projet',
        key: 'id_pr'
      }
    },
    id_mo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'module',
        key: 'id_mo'
      }
    }
  }, {
    tableName: 'document',
    timestamps: false,
    freezeTableName: true
  });
};
