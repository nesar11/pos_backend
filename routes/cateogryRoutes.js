const express = require('express');

const app = express();
const categoryRoutes = express.Router();

const category = require('../controllers/catagoryController');

const Category = require('../models/Category');
// Defined store route
categoryRoutes.post('/add', category.addCategory);
 // Defined get data(index or listing) route

 categoryRoutes.get('/', category.allCategory )

// // // Defined edit route
categoryRoutes.get('/edit/:id', category.editCategory);

// // //  Defined update route
categoryRoutes.post('/update/:id', category.updateCategory);

// // // // Defined delete | remove | destroy route
categoryRoutes.get('/delete/:id', category.deleteCategory);

module.exports = categoryRoutes;