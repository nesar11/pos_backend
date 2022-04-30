const express = require('express');

const app = express();
const multer = require('multer');
const mongoose = require('mongoose');

// Require Business model in our routes module
const Product = require('../models/Product');
const path = require('path');

exports.addProduct =  (req, res, next)=> {
    const file = req.file
    console.log(req.file)
    const url = req.protocol + "://" + req.get("host");
    let product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        pImage: url + "/" + req.file.path,
        status: req.body.status
    });
    product.save()
            .then(Pt => {
                res.status(200).json(Pt);
            console.log(Pt);
            })
            .catch(err => {
            res.status(400).send("unable to save to database");
        });
  }


exports.allProduct = function (req, res) {
    Product.find(function (err, data){
            if(err){
            console.log(err);
            }
            else {
            res.json(data);
                }
        });
    }

    exports.editProduct= function (req, res) {
        let id = req.params.id;
        Product.findById(id, function (err, product){
            res.status(200).json(product);
        });
      }



  exports.updateUpdate = function (req, res) {
    Product.findById(req.params.id, function(err,  product) {
        if (!product)
        return next(new Error('Could not load Document'));
        else {
            product.title = req.body.title;
            product.description = req.body.description;
            product.price = req.body.price;
            product.pImage = req.body.pImage;
            
            product.save().then(product => {
            res.json('Update complete');
            console.log(product);
            })
            .catch(err => {
                    res.status(400).send("unable to update the database");
            });
            }
        });
    }
    
    exports.deleteProduct= function (req, res) {
        Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }