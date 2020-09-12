module.exports=(sequelize,DataTypes)=>{
    const BlockStatus=sequelize.define('block_status',{
        block_status_id:{type: DataTypes.INTEGER,primaryKey: true},
        block_status_ref:{type:DataTypes.STRING,unique:true},
        block_status:{type:DataTypes.STRING},
        ordinal:{type:DataTypes.INTEGER}
    })
    return BlockStatus
}