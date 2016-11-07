/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_products', {
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
    CODE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PRICE: {
      type: 'DOUBLE',
      allowNull: true
    },
    CUR_QTY: {
      type: 'DOUBLE',
      allowNull: true
    },
    HAS_STOCK: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    INCOME_ACCOUNT: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_accounthead',
        key: 'ID'
      }
    },
    EXPENSE_ACCOUNT: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_accounthead',
        key: 'ID'
      }
    },
    DEFAULT_UNIT: {
      type: DataTypes.INTEGER(3),
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
    IS_POOJA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    DEITY: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_static',
        key: 'ID'
      }
    },
    CATEGORY: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_static',
        key: 'ID'
      }
    },
    IS_DONATION: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_SAMARPANAM: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_MARRIAGE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_RENTAL: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_AUDITORIUM: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_PURCHASE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_SALARY: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_NADAVARAVU: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'sdb_products',
     timestamps: false
  });
};
