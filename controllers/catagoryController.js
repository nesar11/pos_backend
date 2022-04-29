const express = require('express');

const app = express();
// Require Business model in our routes module
const Category = require('../models/Category');

exports.addCategory = function (req, res) {
    let category = new Category(req.body);
        category.save()
            .then(Ct => {
                res.status(200).json(Ct);
            console.log(Ct);
            })
            .catch(err => {
            res.status(400).send("unable to save to database");
        });
  }


exports.allCategory = function (req, res) {
    Category.find(function (err, data){
            if(err){
            console.log(err);
            }
            else {
            res.json(data);
                }
        });
    }

    exports.editCategory= function (req, res) {
        let id = req.params.id;
        Category.findById(id, function (err, category){
            res.status(200).json(category);
        });
      }



  exports.updateCategory = function (req, res) {
    Category.findById(req.params.id, function(err,  category) {
        if (!category)
        return next(new Error('Could not load Document'));
        else {
            category.catName = req.body.catName;
            category.image = req.body.image;
            
            category.save().then(category => {
            res.json('Update complete');
            console.log(category);
            })
            .catch(err => {
                    res.status(400).send("unable to update the database");
            });
            }
        });
    }
    
    exports.deleteCategory= function (req, res) {
        Category.findByIdAndRemove({_id: req.params.id}, function(err, category){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }