module.exports=(sequelize,DataTypes)=>{
    const GraveStatus=sequelize.define('grave_status',{
        grave_status_id:{type: DataTypes.INTEGER,primaryKey: true},
        grave_status_ref:{type:DataTypes.STRING,unique:true},
        grave_status:{type:DataTypes.STRING},
        ordinal:{type:DataTypes.INTEGER}
    })
    return GraveStatus
}