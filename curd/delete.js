var http = require('http'); 
 var MongoClient = require('mongodb').MongoClient; 
 var url = "mongodb://localhost:27017/user_management"; 
 MongoClient.connect(url, function(err, client) { 
 const db = client.db("user_management");
 if (err) throw err; 
 var myquery = { first_name:"Nitish" }; 
 db.collection("users").deleteOne(myquery, function(err, obj) { 
 if (err) throw err; 
 console.log(obj.deletedCount + " record(s) deleted"); 
 client.close(); 
 }); 
 });
