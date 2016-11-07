/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_accounthead', {
    ID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ACC_NUM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ROOT: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_accounthead',
        key: 'ID'
      }
    },
    SUBROOT: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_accounthead',
        key: 'ID'
      }
    },
    PARENT: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_accounthead',
        key: 'ID'
      }
    },
    IS_LEAF: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    IS_DEBIT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IS_PAYMENTACCOUNT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IS_WORK: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_DEPOSITASSET: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_LOANASSET: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_FIXEDASSET: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_SUNDRYDEBTORS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_SUNDRYCREDITORS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_SALARYPAYABLE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_LOANLIABILITY: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_SYSACCOUNT: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_BANK: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_EDITABLE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    IS_DELETABLE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    IS_VISIBLE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    TYPE: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'sdb_accounthead'
  });
};
