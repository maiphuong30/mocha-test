var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();
var r = require('./routes/server.route');

var url='mongodb://localhost:27017/mydatabase';
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(url,
    {useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then((db)=> console.log("db is connected"))
.catch((err) =>console.log(err));

app.use('/',r);

app.listen(3000,function(){
  console.log("I am listening at PORT 3000");
})