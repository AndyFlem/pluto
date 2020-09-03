module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('Site',{
        ref:{type:DataTypes.STRING,unique:true}
    })
}