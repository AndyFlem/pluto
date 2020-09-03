const SitesController=require('./controllers/SitesController')
const UsersController=require('./controllers/UsersController')

const UsersControllerPolicy=require('./policies/UsersControllerPolicy')

module.exports=(app)=>{
    app.get('/sites',SitesController.index)

    app.get('/users',UsersController.index)
    app.post('/user',
        UsersControllerPolicy.insert, 
        UsersController.insert)
}