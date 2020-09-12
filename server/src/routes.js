const BlocksController=require('./controllers/BlocksController')
const RowsController=require('./controllers/RowsController')

const SitesController=require('./controllers/SitesController')
const UsersController=require('./controllers/UsersController')

const UsersControllerPolicy=require('./policies/UsersControllerPolicy')

module.exports=(app)=>{
  app.get('/blocks', BlocksController.index)
  app.get('/blocks/:blockId', BlocksController.show)

  app.get('/blocks/:blockId/rows', RowsController.index)
  app.get('/row/:rowId', RowsController.show)

    app.get('/block/:blockId/sites',SitesController.index)
    

    app.get('/users',UsersController.index)
    app.post('/user',
        UsersControllerPolicy.insert, 
        UsersController.insert)
}