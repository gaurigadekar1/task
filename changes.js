var jsonfile = require('jsonfile');
var fs = require("fs");
var Table = require('easy-table');
var file = 'source.json';
fs.readFile(file,'utf-8', function(err, data) {
console.log(data);

 var currentPackage = JSON.parse(data);
var t = new Table
currentPackage.students.forEach(function(students) {
  t.cell('id', students.id)
  t.cell('  fname', students.fName)
  t.cell('lname', students.lName)
   t.cell('score', students.score)
  t.newRow()
})

console.log(t.toString()); 
fs.writeFile('demo.txt', t, {"encoding":'utf8'}, function(err) {
   if (err) {
      return console.error(err);
   } fs.readFile('demo.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: \n" + data.toString());
	  
 t.sort(['score|des'])
console.log(t.toString());
   });
});	
});


