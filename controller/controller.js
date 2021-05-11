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
    product.find( {product_name: req.body.fn},function(err,response){
        if(err) res.send("Loi");
        else{
            if(response.length==0) res.send("khong tim thay");
            else res.json(response);
        }
        
    });
}