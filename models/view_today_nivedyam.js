/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('view_today_nivedyam', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PID: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    POOJA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    POOJADATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    NUMBER: {
      type: 'DOUBLE',
      allowNull: false
    }
  }, {
    tableName: 'view_today_nivedyam'
  });
};
