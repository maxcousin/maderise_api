/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projet', {
    id_pr: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ref_pr: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    etat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_crea: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_cons: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_clot: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    type_pr: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_cl: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'client',
        key: 'id_cl'
      }
    }
  }, {
    tableName: 'projet',
    timestamps: false,
    freezeTableName: true
  });
};
