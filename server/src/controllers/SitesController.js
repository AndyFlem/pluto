const Site=require('../models').site
const Row=require('../models').row
const Block = require('../models').block

module.exports = {
  async index (req, res) {
    try {
      const block = await Block.findByPk(req.params.blockId,{include:{model: Row, include: {model:Site}}})
      res.send(block)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to fetch the sites'
      })
    }
  },
}