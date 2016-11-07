/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_poojaproperty', {
    ID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    POOJA: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      references: {
        model: 'sdb_products',
        key: 'ID'
      }
    },
    PROPERTY: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    VALUE: {
      type: 'DOUBLE',
      allowNull: true
    }
  }, {
    tableName: 'sdb_poojaproperty'
  });
};
