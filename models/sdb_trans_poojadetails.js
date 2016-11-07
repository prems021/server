/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_trans_poojadetails', {
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
    TODAY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DIVOTTEE: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'sdb_devotees',
        key: 'ID'
      }
    },
    DEVOTTEE_STAR: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    SECOND_DIVOTTEE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SECOND_DEVOTTEE_STAR: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    COMMENTS: {
      type: DataTypes.STRING,
      allowNull: true
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
    ACCOUNT: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_accounthead',
        key: 'ID'
      }
    },
    PAYMENT_METHOD: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    IS_DEBIT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'sdb_trans_poojadetails'
  });
};
