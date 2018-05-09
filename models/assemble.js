/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assemble', {
    x_co: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    y_co: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    z_co: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    long_mc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    larg_mc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    epai_mc: {
      type: DataTypes.FLOAT,
      allowNull: true
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
    id_co: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'composant',
        key: 'id_co'
      }
    }
  }, {
    tableName: 'assemble',
    timestamps: false,
    freezeTableName: true
  });
};
