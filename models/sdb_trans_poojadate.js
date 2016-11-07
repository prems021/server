/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_trans_poojadate', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MASTER: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sdb_trans_poojamaster',
        key: 'ID'
      }
    },
    POOJA_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IS_CONTINUOUS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'sdb_trans_poojadate'
  });
};
