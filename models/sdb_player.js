module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sdb_player', {
    ID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: true
    },
    
    GOALS: {
      type: 'DOUBLE',
      allowNull: true
    },
    sdbTeamID:
    {
      type:DataTypes.INTEGER(6),
      allowNull:false,
        references: {
        model: 'sdb_team',
        key: 'ID'
      },
    }
   
  },

   {
    timestamps: false,
    freezeTableName: true
  });
};
