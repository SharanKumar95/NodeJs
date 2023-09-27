// import express package - npm install express
const express = require('express');
// Initialize the port you will be using for the listening
const port = 8000;

/* 
   Initialize app to point to the express constructor 
   Now app can be used to call the functions in express
   */
const app = express();

/* Below 2 lines are to fix compilation errors */
app.use(express.json()); // specify the format of the values sent from Postman
app.use(express.urlencoded({extended:false}));

//Initialize the router
const router = express.Router();

/* app changed to router */
/* get is used to send the response to the client */
router.get('/', function(request, response){
    response.send('This is the server!!');
});

/* addEmployee is a route */
router.post('/addEmployee', function(request, response){
    let empName = request.body.empName;
    let empPass = request.body.empPass;

    response.end(`This, is your name ${empName} and password ${empPass}`);
});

router.get('/aboutUs', function(request, response){
    response.end('This is the about Us page');
})
// Bind the app and the Router: Register the router with the app
app.use('/', router);

/* Listen to connections on this port */
app.listen(port, function(){
    console.log("App is listening on port: "+ port);
});