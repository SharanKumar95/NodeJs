const controller = require('../controllers/controller')
module.exports = function(router){
    
/* app changed to router */
/* get is used to send the response to the client */
// router.get('/', function(request, response){
//     response.send('This is the server!!');
// });
//     /* addEmployee is a route */
// router.post('/addEmployee', function(request, response){
//     let empName = request.body.empName;
//     let empPass = request.body.empPass;

//     response.end(`This, is your name ${empName} and password ${empPass}`);
// });

// router.get('/aboutUs', function(request, response){
//     response.end('This is the about Us page');
// });

router.get('/', controller.getDefault);

router.post('/addEmployee', controller.addEmployee);

router.get('/aboutUs', controller.aboutUs);

router.get('/getEmployee', controller.getEmployee);
};