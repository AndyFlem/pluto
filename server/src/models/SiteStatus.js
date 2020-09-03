module.exports=(sequelize,DataTypes)=>{
    const SiteStatus=sequelize.define('SiteStatus',{
        SiteStatusRef:{type:DataTypes.STRING,unique:true},
        SiteStatus:{type:DataTypes.STRING},
        Ordinal:{type:DataTypes.INTEGER}
    })
    return SiteStatus
}