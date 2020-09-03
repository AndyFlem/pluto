const {User}=require('../models')


async function index(req,res) {
    res.send({users:[{user:1},{user:2}]})
}

async function insert(req,res) {

    try {
        const user=await User.create(req.body)
        res.send(user.toJSON())
    } catch (err) {
        if (err.name=='SequelizeUniqueConstraintError'){
            res.status(400).send({error:`Can't add duplicate user.`})
        }else{
            res.status(400).send({error:'Error inserting user. [' + err + ']'})
        }
        
    }
}


module.exports={index,insert}
 