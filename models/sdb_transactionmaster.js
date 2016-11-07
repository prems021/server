/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_transactionmaster', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    COUNTER: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    REF_NO: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TODAY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TOTAL: {
      type: 'DOUBLE',
      allowNull: false
    },
    TOTAL_DUE: {
      type: 'DOUBLE',
      allowNull: true
    },
    PARTY: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'sdb_parties',
        key: 'ID'
      }
    },
    STATUS_PAYMENT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    NOTES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    USER: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      references: {
        model: 'sdb_users',
        key: 'ID'
      }
    },
    IS_PURCHASE: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TRANSACTION_TYPE: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    IS_FINISH: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IS_DELETED: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_EDITED: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'sdb_transactionmaster'
  });
};
