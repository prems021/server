module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_team', {
    ID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TEAM_NAME: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MANAGER_NAME: {
      type: DataTypes.STRING,
      allowNull: true
    }
   
  },

   {
    
    timestamps: false,
    freezeTableName: true
  });
};
