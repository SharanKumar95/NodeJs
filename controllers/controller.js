const Employee = require('../models/employee')

exports.getDefault = function(request, response){
    response.send('Response from getDefault');
}

exports.aboutUs = function(request, response){
    response.send('Response from aboutUs');
};

exports.addEmployee = function(request, response){
    let name = request.body.empName;
    let pass = request.body.empPass;

    request.end(`Adding employee: ${empName} and password: ${empPass}`);
}

exports.getEmployee = function(request, response){
   Employee.find({})
   .then(
    function(employeeData){
    response.send(employeeData)
   }
   )
};
