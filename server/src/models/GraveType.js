module.exports=(sequelize,DataTypes)=>{
    const GraveType=sequelize.define('grave_type',{
        grave_type_id:{type: DataTypes.INTEGER,primaryKey: true},
        grave_type_ref:{type:DataTypes.STRING,unique:true},
        grave_type:{type:DataTypes.STRING},
        ordinal:{type:DataTypes.INTEGER}
    })
    return GraveType
}