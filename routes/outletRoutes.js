
const express = require('express');

const app = express();
const outletRoutes = express.Router();

const outlet = require('../controllers/outlet.controller');
// Require Business model in our routes module
const Outlet = require('../models/Outlet');
// Defined store route
outletRoutes.post('/add', outlet.addOutlet);

// Defined get data(index or listing) route
outletRoutes.get('/', outlet.allOutlet )

// Defined edit route
outletRoutes.get('/edit/:id', outlet.editOutlet);

//  Defined update route
outletRoutes.post('/update/:id', outlet.updateOutlet);

// Defined delete | remove | destroy route
outletRoutes.get('/delete/:id', outlet.deleteOutlet);

module.exports = outletRoutes;