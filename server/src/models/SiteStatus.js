module.exports=(sequelize,DataTypes)=>{
    const SiteStatus=sequelize.define('site_status',{
        site_status_id:{type: DataTypes.INTEGER,primaryKey: true},
        site_status_ref:{type:DataTypes.STRING,unique:true},
        site_status:{type:DataTypes.STRING},
        ordinal:{type:DataTypes.INTEGER}
    })
    return SiteStatus
}