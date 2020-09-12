const Row = require('../models').row
const Block = require('../models').block

module.exports = {
  async index (req, res) {
    try {
      const block = await Block.findByPk(req.params.blockId,{include:Row})
      res.send(block.Rows)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to fetch the rows'
      })
    }
  },
  async show (req, res) {
    try {
      const row = await Row.findByPk(req.params.rowId)
      res.send(row)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to fetch the row'
      })
    }
  },
}