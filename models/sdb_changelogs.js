/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_changelogs', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TABLE_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    TABLE_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    COLUMN_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    OLD_VALUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    NEW_VALUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '0'
    },
    TODAY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    USER: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'sdb_changelogs'
  });
};
