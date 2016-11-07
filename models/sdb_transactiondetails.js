/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_transactiondetails', {
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
        model: 'sdb_transactionmaster',
        key: 'ID'
      }
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
    COMMENTS: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '""'
    },
    QUANTITY: {
      type: 'DOUBLE',
      allowNull: true
    },
    RATE: {
      type: 'DOUBLE',
      allowNull: true
    },
    AMOUNT: {
      type: 'DOUBLE',
      allowNull: false
    },
    PRODUCT: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_products',
        key: 'ID'
      }
    },
    ACCOUNT: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_accounthead',
        key: 'ID'
      }
    },
    PAYMENT_METHOD: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    IS_DEBIT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'sdb_transactiondetails',
    timestamps: false
  });
};
