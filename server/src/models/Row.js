module.exports=(sequelize,DataTypes)=>{
    const Row=sequelize.define('row',{
        row_id:{type: DataTypes.INTEGER,primaryKey: true},
        row_ref:{type:DataTypes.STRING,unique:true},
        row_no:{type:DataTypes.INTEGER},
        geometry:{type:DataTypes.GEOMETRY('POLYGON', 32735)},
    })
    Row.associate = function (models) {
        Row.belongsTo(models.block,{foreignKey: 'block_id'})
        Row.hasMany(models.site,{foreignKey: 'row_id'})
    }    
    return Row
}