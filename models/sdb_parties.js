/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_parties', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PARTY_NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PEN: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    DESIGNATION: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'sdb_static',
        key: 'ID'
      }
    },
    SALN: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ADDRESS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PO_BOX: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MOBILE_NO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TEL_NO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOJ: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IS_MALE: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    IS_USER: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_EMPLOYEE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_CUSTOMER: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_SUPPLIER: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    IS_AVAKASHI: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    IS_DEVOTTEE: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'sdb_parties',
    timestamps: false
  });
};
