module.exports=(sequelize,DataTypes)=>{
    const Block=sequelize.define('Block',{
        BlockRef:{type:DataTypes.STRING,unique:true},
        Geometry:{type:DataTypes.GEOMETRY('POLYGON', 32735)},
    })
    Block.associate = function (models) {
        Block.belongsTo(models.Section)
    }       
    return Block
}