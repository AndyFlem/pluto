module.exports=(sequelize,DataTypes)=>{
    const Grave=sequelize.define('Grave',{
        GraveNo:{type:DataTypes.INTEGER},
        GraveRef:{type:DataTypes.STRING,unique:true}
    })

    Grave.associate = function (models) {
        Grave.belongsTo(models.Site)
        Grave.belongsTo(models.GraveStatus)
        Grave.belongsTo(models.GraveType)
    }    
    return Grave
}