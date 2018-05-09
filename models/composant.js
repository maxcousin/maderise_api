/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('composant', {
    id_co: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    famille: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ref_co: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    long_co: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    larg_co: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    epai_co: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    prix: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'composant',
    timestamps: false,
    freezeTableName: true
  });
};
