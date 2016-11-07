/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shaivam_poojatransaction_', {
    Counter: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RealName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Privilege: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReceiptNo: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Number: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    PoojaCode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    StarCode: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rate: {
      type: 'DOUBLE',
      allowNull: false
    },
    Amount: {
      type: 'DOUBLE',
      allowNull: false
    },
    Today: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    ISContinuous: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    PaymentMode: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  }, {
    tableName: 'shaivam_poojatransaction_'
  });
};
