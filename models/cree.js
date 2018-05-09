/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cree', {
    id_ut: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'utilisateur',
        key: 'id_ut'
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
    tableName: 'cree',
    timestamps: false,
    freezeTableName: true
  });
};
