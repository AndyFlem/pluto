const Joi=require('joi')

module.exports = {
    insert (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            name: Joi.string().required()
        })
        const val=schema.validate(req.body)

        
        if (val.error) {
            switch (val.error.details[0].context.key) {
                case 'email':
                    res.status(400).send({error: `<em>Email address</em> not valid.`})
                    break
                case 'name':
                    res.status(400).send({error: `<em>Name</em> not valid.`})
                    break
                default:
                    res.status(400).send({error: `<em>User</em> not valid.`})
                    break
            }
        }else {
            next()
        }
        
    }
}