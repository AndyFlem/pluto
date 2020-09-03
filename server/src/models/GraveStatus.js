module.exports=(sequelize,DataTypes)=>{
    const GraveStatus=sequelize.define('GraveStatus',{
        GraveStatusRef:{type:DataTypes.STRING,unique:true},
        GraveStatus:{type:DataTypes.STRING},
        Ordinal:{type:DataTypes.INTEGER}
    })
    return GraveStatus
}