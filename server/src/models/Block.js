module.exports=(sequelize,DataTypes)=>{
    const Block=sequelize.define('block',{
        block_id:{type: DataTypes.INTEGER,primaryKey: true},
        block_ref:{type:DataTypes.STRING,unique:true},
        geometry:{type:DataTypes.GEOMETRY('POLYGON', 32735)},
    })
    Block.associate = function (models) {
        Block.belongsTo(models.section,{foreignKey: 'section_id'})
        Block.hasMany(models.row,{foreignKey: 'block_id'})
        Block.belongsTo(models.block_status,{foreignKey: 'block_status_id'})
    }       
    return Block
}