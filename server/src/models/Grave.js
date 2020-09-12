module.exports=(sequelize,DataTypes)=>{
    const Grave=sequelize.define('grave',{
        grave_id:{type: DataTypes.INTEGER,primaryKey: true},
        grave_no:{type:DataTypes.INTEGER},
        grave_ref:{type:DataTypes.STRING,unique:true}
    })

    Grave.associate = function (models) {
        Grave.belongsTo(models.site,{foreignKey: 'site_id'})
        Grave.belongsTo(models.grave_status,{foreignKey: 'grave_status_id'})
        Grave.belongsTo(models.grave_type,{foreignKey: 'grave_type_id'})
    }    
    return Grave
}