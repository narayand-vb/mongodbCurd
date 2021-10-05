var http = require('http'); 
 var MongoClient = require('mongodb').MongoClient; 
 var url = "mongodb://localhost:27017/user_management"; 
 MongoClient.connect(url, function(err, client) { 
 const db = client.db("user_management");
 if (err) throw err; 
 var myquery = { first_name:"Meghana" }; 
 db.collection("users").updateOne(myquery,{$set:{first_name:"Praveen"}} ,function(err, obj) { 
 if (err) throw err; 
 console.log(obj.modifiedCount + " record(s) updated"); 
 client.close(); 
 }); 
 });
