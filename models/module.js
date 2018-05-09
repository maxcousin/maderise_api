/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('module', {
    id_mo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nature: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ref_mo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    long_mo: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    larg_mo: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    epai_mo: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    id_ga: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'gamme',
        key: 'id_ga'
      }
    }
  }, {
    tableName: 'module',
    timestamps: false,
    freezeTableName: true
  });
};
