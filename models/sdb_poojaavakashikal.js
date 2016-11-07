/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_poojaavakashikal', {
    POOJA: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sdb_products',
        key: 'ID'
      }
    },
    AVAKASHI: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sdb_parties',
        key: 'ID'
      }
    },
    PERCENTAGE: {
      type: 'DOUBLE',
      allowNull: false
    }
  }, {
    tableName: 'sdb_poojaavakashikal'
  });
};
