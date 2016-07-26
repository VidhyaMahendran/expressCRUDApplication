var express = require('express');
var router = express.Router();

var employeesList = {"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('employees', { employeesList: employeesList });
});

module.exports = router;
