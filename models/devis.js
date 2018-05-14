/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('devis', {
    id_de: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_crea: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_pr: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'projet',
        key: 'id_pr'
      }
    }
  }, {
    tableName: 'devis',
    timestamps: false,
    freezeTableName: true
  });
};
