module.exports=(sequelize,DataTypes)=>{
    const SiteType=sequelize.define('site_type',{
        site_type_id:{type: DataTypes.INTEGER,primaryKey: true},
        site_type_ref:{type:DataTypes.STRING,unique:true},
        site_type:{type:DataTypes.STRING},
        graves:{type:DataTypes.INTEGER},
        area:{type:DataTypes.FLOAT},
        standard_width:{type:DataTypes.FLOAT},
        standard_height:{type:DataTypes.FLOAT},
        standard_spacing:{type:DataTypes.FLOAT}

    })
    return SiteType
}