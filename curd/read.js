// var http = require('http'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/user_management"; 
MongoClient.connect(url, function(err, client) { 
const db = client.db("user_management");
if (err) throw err; 
var query = {first_name :"Mukesh"}; 
db.collection("users").find({query}).toArray(function(err, result) { 
if (err) throw err; 
console.log(result); 
client.close(); 
}); 
});
