const express = require('express');
const port = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const router = express.Router();
app.get('/', function(request, response){
    response.send('This is the server!!');
})

app.post('/addEmployee', function(request, response){
    let empName = request.body.empName;
    let empPass = request.body.empPass;

    response.end(This is your name ${empName} and password ${empPass});
})
app.listen(port, function(){
    console.log("I'm listening on port: "+ port);
})