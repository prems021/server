/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_settings', {
    ID: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    EN_VALUE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ML_VALUE: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'sdb_settings',
    timestamps: false
  });
};
