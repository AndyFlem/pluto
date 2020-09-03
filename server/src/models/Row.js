module.exports=(sequelize,DataTypes)=>{
    const Row=sequelize.define('Row',{
        RowRef:{type:DataTypes.STRING,unique:true},
        RowNo:{type:DataTypes.INTEGER},
    })
    Row.associate = function (models) {
        Row.belongsTo(models.Block)
    }    
    return Row
}