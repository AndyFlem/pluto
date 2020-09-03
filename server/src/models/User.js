module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('User',{
        email:{type:DataTypes.STRING,unique:true},
        name:{type:DataTypes.STRING,unique:true},        
    })
}