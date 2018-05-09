'use strict';
module.exports = (sequelize, DataTypes) => {
  var maderise = sequelize.define('maderise', {}, {});
  maderise.associate = function(models) {
    // associations can be defined here
  };
  return maderise;
};