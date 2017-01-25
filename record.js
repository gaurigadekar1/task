

var fs = require('fs');  
var jf=require('jsonfile');
var Table = require('easy-table')
 
 

var s1=null;

fs.readFile('./source.json', 'utf8', onFileRead);

function onFileRead(err, data) {  
  if (err) throw err;
  var currentPackage = JSON.parse(data);
 
var s1id=currentPackage.students[0].id;
  var s1fname=currentPackage.students[0].fName;
  var s1lname=currentPackage.students[0].lName;
var s1score=currentPackage.students[0].score;


var s2id=currentPackage.students[1].id;
  var s2fname=currentPackage.students[1].fName;
  var s2lname=currentPackage.students[1].lName;
var s2score=currentPackage.students[1].score;

var s3id=currentPackage.students[2].id;
  var s3fname=currentPackage.students[2].fName;
  var s3lname=currentPackage.students[2].lName;
var s3score=currentPackage.students[2].score;




var data = [
  { id: s1id, fName:s1fname, lName:s1lname,score: s1score },
  { id: s2id, fName:s2fname,lName:s2lname, score: s2score},
  { id: s3id, fName:s2fname, lName:s3lname,score: s3score}
]


var t = new Table
 
data.forEach(function(product) {

  t.cell('Id', product.id)
  t.cell('fName', product.fName)
  t.cell('lName', product.lName)
   t.cell('score', product.score, Table.number(2))
  t.newRow()
})


fs.appendFile("destination.txt", t.toString());




fs.appendFile("destination.txt", t.sort(['score|des']) );


  
}






