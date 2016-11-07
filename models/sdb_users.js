/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_users', {
    ID: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USERNAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ISACTIVE: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    EMPLOYEE: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'sdb_parties',
        key: 'ID'
      }
    },
    ROLE: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'sdb_users',
    timestamps: false
  });
};
