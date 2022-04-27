const express = require('express');

const app = express();
// Require Business model in our routes module
const Outlet = require('../models/Outlet');

exports.addOutlet = function (req, res) {
    let outlet = new Outlet(req.body);
        outlet.save()
        .then(data => {
            res.status(200).json(data);
        console.log(data);
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
    });
  }

exports.allOutlet = function (req, res) {
        Outlet.find(function (err, outlets){
            if(err){
            console.log(err);
            }
            else {
            res.json(outlets);
                }
        });
    }

exports.editOutlet= function (req, res) {
    let id = req.params.id;
    Outlet.findById(id, function (err, outlet){
        res.json(outlet);
    });
  }

  exports.updateOutlet = function (req, res) {
    Outlet.findById(req.params.id, function(err,  outlet) {
        if (!outlet)
        return next(new Error('Could not load Document'));
        else {
            outlet.outletName = req.body.outletName;
            outlet.address = req.body.address;
            outlet.status = req.body.status;
            outlet.table = req.body.table;

            outlet.save().then(business => {
            res.json('Update complete');
            })
            .catch(err => {
                    res.status(400).send("unable to update the database");
            });
            }
        });
    }
    
    exports.deleteOutlet = function (req, res) {
        Outlet.findByIdAndRemove({_id: req.params.id}, function(err, outlet){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }