function myFunction(roar){

 var lion = {
 "name": "Simba", 
 "leg:": 4,
 "tails": 1,
 "roar": "roar-roar"
 
 };
 
 delete lion[roar];
 return lion;
 
 }
 
 console.log(myFunction("roar"));
 
 module.exports = myFunction;