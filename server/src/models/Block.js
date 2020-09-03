module.exports=(sequelize,DataTypes)=>{
    const Block=sequelize.define('Block',{
        BlockRef:{type:DataTypes.STRING,unique:true}
    })
    Block.associate = function (models) {
        Block.belongsTo(models.Section)
    }       
    return Block
}