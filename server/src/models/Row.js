module.exports=(sequelize,DataTypes)=>{
    const Row=sequelize.define('Row',{
        RowRef:{type:DataTypes.STRING,unique:true},
        RowNo:{type:DataTypes.INTEGER},
        Sites:{type:DataTypes.INTEGER},
        Geometry:{type:DataTypes.GEOMETRY('POLYGON', 32735)},
    })
    Row.associate = function (models) {
        Row.belongsTo(models.Block)
    }    
    return Row
}