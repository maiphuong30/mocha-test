var express = require('express');
var mongoose = require('mongoose');
var product = require('../models/sanpham');
var ctl = require('../controller/controller');
var router = express.Router();
router.get('/',function(req,res){
    res.json({"error" : false, "message" : "Hello !"});
});
router.get('/add', function(req, res){
    res.render('add',{title:'Add'})
});
router.post('/add',ctl.save);
router.get('/find/:fn',ctl.find);
router.get('/show',ctl.all);
router.delete('/delete',ctl.find);
module.exports = router;
