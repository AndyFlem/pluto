const {Site}=require('../models')


module.exports={
    index: (req,res) => {
        res.send({sites:[{site:1},{site:2}]})
    }   
}
 