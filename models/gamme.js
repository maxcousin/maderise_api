/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gamme', {
    id_ga: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ref_ga: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    formule: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'gamme',
    timestamps: false,
    freezeTableName: true
  });
};
