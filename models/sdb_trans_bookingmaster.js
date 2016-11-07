/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_trans_bookingmaster', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
   
    TODAY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    PRODUCT: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
     
    },
    RATE: {
      type: 'DOUBLE',
      allowNull: false
    },
    TOTAL_DUE: {
      type: 'DOUBLE',
      allowNull: true
    },
    STATUS_PAYMENT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    NOTES: {
      type: DataTypes.STRING,
      allowNull: true
    },
    USER: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
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
    tableName: 'sdb_trans_bookingmaster',
    timestamps: false
  });
};
