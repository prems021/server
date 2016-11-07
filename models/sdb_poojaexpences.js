/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_poojaexpences', {
    POOJA: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sdb_products',
        key: 'ID'
      }
    },
    Expence: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sdb_products',
        key: 'ID'
      }
    },
    QUANTITY: {
      type: 'DOUBLE',
      allowNull: false
    }
  }, {
    tableName: 'sdb_poojaexpences'
  });
};
