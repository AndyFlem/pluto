module.exports=(sequelize,DataTypes)=>{
    const GraveType=sequelize.define('GraveType',{
        GraveTypeRef:{type:DataTypes.STRING,unique:true},
        GraveType:{type:DataTypes.STRING},
        Ordinal:{type:DataTypes.INTEGER}
    })
    return GraveType
}