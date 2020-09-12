module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('user',{
        user_id:{type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
        email:{type:DataTypes.STRING,unique:true},
        name:{type:DataTypes.STRING},        
    })
}