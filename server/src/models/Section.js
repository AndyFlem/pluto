module.exports=(sequelize,DataTypes)=>{
    const Section=sequelize.define('Section',{
        SectionRef:{type:DataTypes.STRING,unique:true}
    })
      
    return Section
}