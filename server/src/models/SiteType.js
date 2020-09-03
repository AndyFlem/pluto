module.exports=(sequelize,DataTypes)=>{
    const SiteType=sequelize.define('SiteType',{
        SiteTypeRef:{type:DataTypes.STRING,unique:true},
        SiteType:{type:DataTypes.STRING},
        Graves:{type:DataTypes.INTEGER},
        Area:{type:DataTypes.FLOAT},
        StandardWidth:{type:DataTypes.FLOAT},
        StandardHeight:{type:DataTypes.FLOAT},
        StandardSpacing:{type:DataTypes.FLOAT}

    })
    return SiteType
}