/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produit', {
    id_fo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fournisseur',
        key: 'id_fo'
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
    tableName: 'produit',
    timestamps: false,
    freezeTableName: true
  });
};
