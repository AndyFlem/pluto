const SitesController=require('./controllers/SitesController')
const UsersController=require('./controllers/UsersController')

module.exports=(app)=>{
    app.get('/sites',SitesController.index)
    app.get('/users',UsersController.index)
    app.post('/user',UsersController.insert)
}