var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb://localhost/simple');
var personSchema = {
	Shop: String,
	Date: String,
	Item: String,
	Quantity: String,
	Cost: String,
	"Total Cost": String
};

var Person = mongoose.model('Person', personSchema, 'people');


app.use(cors());
app.get('/people',function(req, res){
	Person.find(function(err, doc){
		res.send(doc);
	});
	
});

app.listen(3000)