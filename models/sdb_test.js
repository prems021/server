module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_test', {
    ID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    QUANTITY: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    POOJA_NAME: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DEVOTEE_NAME: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sdb_devotees',
        key: 'ID'
      }
    
     
    },
    
    DEVOTEE_STAR: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RATE: {
      type: 'DOUBLE',
      allowNull: true
    },
    AMOUNT: {
      type: 'DOUBLE',
      allowNull: true
    },
    TOTAL: {
      type: 'DOUBLE',
      allowNull: true
    }
  },




   {
    
    timestamps: false,
    freezeTableName: true
  });
};
