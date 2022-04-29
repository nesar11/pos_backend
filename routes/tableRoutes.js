const express = require('express');

const app = express();
const tableRoutes = express.Router();

const table = require('../controllers/tableController');
// Require Business model in our routes module
const Outlet = require('../models/Table');
// Defined store route
tableRoutes.post('/add', table.addTable);
 // Defined get data(index or listing) route

tableRoutes.get('/', table.allTable )

// Defined edit route
tableRoutes.get('/edit/:id', table.editTable);

//  Defined update route
 tableRoutes.post('/update/:id', table.updateTable);

// // Defined delete | remove | destroy route
tableRoutes.get('/delete/:id', table.deleteTable);

module.exports = tableRoutes;