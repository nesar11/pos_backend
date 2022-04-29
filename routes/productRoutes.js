const express = require('express');

const app = express();
const productRoutes = express.Router();

const product = require('../controllers/productController');

const Product = require('../models/Product');
// Defined store route
productRoutes.post('/add', product.addProduct);
 // Defined get data(index or listing) route

 productRoutes.get('/', product.allProduct )

// Defined edit route
productRoutes.get('/edit/:id', product.editProduct);

 //  Defined update route
productRoutes.post('/update/:id', product.updateUpdate);

// Defined delete | remove | destroy route
productRoutes.get('/delete/:id', product.deleteProduct);

module.exports = productRoutes;