/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('view_poojalist_detailed', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    INVOICE: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    COUNTER: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    POOJA_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DIVOTTEE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ADDRESS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MOBILE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    STAR_CODE: {
      type: DataTypes.INTEGER(4),
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
    AMOUNT: {
      type: 'DOUBLE',
      allowNull: true
    },
    QUANTITY: {
      type: 'DOUBLE',
      allowNull: true
    },
    BOOKING_ONLY: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    IS_CONTINUOUS: {
      type: 'VARBINARY(1)',
      allowNull: false
    }
  }, {
    tableName: 'view_poojalist_detailed'
  });
};
