const Block = require('../models').block
const BlockStatus = require('../models').block_status

module.exports = {
  async index (req, res) {
    try {
      const blocks = await Block.findAll({include:BlockStatus})
      res.send(blocks)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to fetch the blocks'
      })
    }
  },
  async show (req, res) {
    try {
      const block = await Block.findByPk(req.params.blockId)
      res.send(block)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to fetch the block'
      })
    }
  },
}