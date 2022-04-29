const express = require('express');

const app = express();
// Require Business model in our routes module
const Table = require('../models/Table');

exports.addTable = function (req, res) {
    let table = new Table(req.body);
        table.save()
        .then(Table => {
            res.status(200).json(Table);
        console.log(Table);
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
    });
  }


exports.allTable = function (req, res) {
        Table.find(function (err, tables){
            if(err){
            console.log(err);
            }
            else {
            res.json(tables);
                }
        });
    }

    exports.editTable= function (req, res) {
        let id = req.params.id;
        Table.findById(id, function (err, table){
            res.status(200).json(table);
        });
      }



  exports.updateTable = function (req, res) {
    Table.findById(req.params.id, function(err,  table) {
        if (!table)
        return next(new Error('Could not load Document'));
        else {
            table.tableNumber = req.body.tableNumber;
            table.outlet = req.body.outlet;
            
            table.save().then(table => {
            res.json('Update complete');
            console.log(table);
            })
            .catch(err => {
                    res.status(400).send("unable to update the database");
            });
            }
        });
    }
    
    exports.deleteTable = function (req, res) {
        Table.findByIdAndRemove({_id: req.params.id}, function(err, table){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }