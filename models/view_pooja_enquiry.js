/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('view_pooja_enquiry', {
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
    DEVOTTEE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    POOJA_ID: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    POOJA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TOTAL: {
      type: 'DOUBLE',
      allowNull: false
    },
    STATUS_PAYMENT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'view_pooja_enquiry'
  });
};
