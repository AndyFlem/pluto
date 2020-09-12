module.exports=(sequelize,DataTypes)=>{
    const Section=sequelize.define('section',{
        section_id:{type: DataTypes.INTEGER,primaryKey: true},
        section_ref:{type:DataTypes.STRING,unique:true},
        geometry:{type:DataTypes.GEOMETRY('POLYGON', 32735)},
    })
    Section.associate = function (models) {
        Section.hasMany(models.block,{foreignKey: 'block_id'})
    }    
    return Section
}