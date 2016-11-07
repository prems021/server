/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_devotees', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ADDRESS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MOBILE_NO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IS_VARISANKHYA: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'sdb_devotees',
    timestamps: false
  });
};
