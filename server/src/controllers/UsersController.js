const {User}=require('../models')


async function index(req,res) {
    res.send({users:[{user:1},{user:2}]})
}

async function insert(req,res) {
    console.log(req.body)
    try {
        const user=await User.create(req.body)
        res.send(user.toJSON())
    } catch (err) {
        console.log(err)
        res.status(400).send({error:'Error inserting user.'})
    }

    res.send({users:[{user:1},{user:2}]})
}


module.exports={index,insert}
 