var express = require('express');
var mongoose = require('mongoose');
var product = require('../models/sanpham');
module.exports.save =  function(req,res){
    var pInfor = req.body;
    console.log(pInfor);
    var newp = new product({
        product_name: pInfor.pname,
        quantity: pInfor.pqty,
        price: pInfor.pprice
    });
    newp.save(function(err){
        if(err)
        res.json({"message" : "loi"})
        else
        res.send({
            message: "successfully added!"
        });
    });
};
module.exports.find = function(req,res){
    product.find( {product_name: req.params.fn},function(err,response){
        if(err) res.json({message : "loi"})
        else{
            if(response.length==0){
                res.send({
                     message: "khong tim thay"
                });
            }
            else res.json(response);
        }
    });
}
module.exports.all = function(req,res){
    product.find( function(err,response){
        if(err) res.send("Loi");
        else{
            res.json(response);
        }
    });
}
module.exports.del = function(req,res){
    product.deleteOne({ product_name: req.body.dname}, function(err){
        if(err) res.send("Loi");
        else
        res.send({
            message: "successfully delete!"
        });
     });
}