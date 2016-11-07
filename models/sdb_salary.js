/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_salary', {
    EMP_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sdb_parties',
        key: 'ID'
      }
    },
    SALARY_HEAD: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sdb_products',
        key: 'ID'
      }
    },
    AMOUNT: {
      type: 'DOUBLE',
      allowNull: false
    }
  }, {
    tableName: 'sdb_salary'
  });
};
