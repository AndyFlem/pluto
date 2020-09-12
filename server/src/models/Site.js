module.exports=(sequelize,DataTypes)=>{
    const Site = sequelize.define('site',{
        site_id:{type: DataTypes.INTEGER,primaryKey: true},
        site_ref:{type:DataTypes.STRING,unique:true},
        site_no:{type:DataTypes.INTEGER},
        geometry:{type:DataTypes.GEOMETRY('POLYGON', 32735)},
    },
    )
    Site.associate = function (models) {
        Site.belongsTo(models.row,{foreignKey: 'row_id'})
        Site.belongsTo(models.site_type,{foreignKey: 'site_type_id'})
        Site.belongsTo(models.site_status,{foreignKey: 'site_status_id'})
        Site.hasMany(models.grave,{foreignKey: 'grave_id'})
    }
    return Site;
}