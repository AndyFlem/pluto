module.exports=(sequelize,DataTypes)=>{
    const Section=sequelize.define('Section',{
        SectionRef:{type:DataTypes.STRING,unique:true},
        Geometry:{type:DataTypes.GEOMETRY('POLYGON', 32735)},
    })
      
    return Section
}