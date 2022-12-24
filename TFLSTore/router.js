var flowersController =require('./controllers/flowerscontroller');
var dashboardcontroller=require('./controllers/dashboardcontroller');
var homeController=require('./controllers/homeconroller');

module.exports=function(app){
    //HTTP Request Delegation to controller functions
    //URL Mapping with callback functions avaialable  withcontroller
    
    app.route('/').get(homeController.get);
    app.route('/products')
        .get(flowersController.getAll)
        .post(flowersController.insert);
    
    app.route('/products/:flowerid')
        .get(flowersController.getById)
        .delete(flowersController.delete)
        .put(flowersController.update);

    app.route('/products/topten').get(dashboardcontroller.getTopten);

};