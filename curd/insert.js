var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/user_management";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var myobj = [{
  "index": 1,
  "first_name": "Shubham",
  "last_name": "Pandey",
  "email": "shubham.pandey123@gmail.com",
  "phone": 8956745623
},{
  "index": 2,
  "first_name": "Atul",
  "last_name": "Gupta",
  "email": "atul.gupta@gmail.com",
  "phone": 56468985464
},{
  "index": 3,
  "first_name": "Deepmalya",
  "last_name": "Sarkar",
  "email": "deepmalya.sarkar@gmail.com",
  "phone": 9856897456
},{
  "index": 4,
  "first_name": "Avijit",
  "last_name": "Ghosh",
  "email": "avijit.ghosh@gmail.com",
  "phone": 784546686
},{
  "index": 5,
  "first_name": "Nitish",
  "last_name": "Pandey",
  "email": "nitish.pandey62@gmail.com",
  "phone": 569874522
},{
  "index": 6,
  "first_name": "Mukesh",
  "last_name": "Megotia",
  "email": "mukesh.megotia23@gmail.com",
  "phone": 8955669723
}]
   const db = client.db("user_management");
   db.collection("users").insertMany(myobj, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
     client.close();
   });
 });
