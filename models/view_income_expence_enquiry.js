/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('view_income_expence_enquiry', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    BILL_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    INVOICE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PRODUCT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PARTY: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TOTAL: {
      type: 'DOUBLE',
      allowNull: false
    },
    DUE: {
      type: 'DOUBLE',
      allowNull: true
    },
    IS_PURCHASE: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    STATUS_PAYMENT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'view_income_expence_enquiry'
  });
};
