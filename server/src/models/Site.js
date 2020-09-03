module.exports=(sequelize,DataTypes)=>{
    const Site = sequelize.define('Site',{
        SiteRef:{type:DataTypes.STRING,unique:true},
        SiteNo:{type:DataTypes.INTEGER},
    })
    Site.associate = function (models) {
        Site.belongsTo(models.Row)
        Site.belongsTo(models.SiteType)
        Site.belongsTo(models.SiteStatus)
    }
    return Site;
}