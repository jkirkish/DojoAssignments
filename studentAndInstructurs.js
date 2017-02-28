/*Students and Instructors
Part I

Given the following array of objects:

var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]
Create a program that outputs:

Michael Jordan
John Rosales
Mark Guillen
KB Tonel*/
var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
];
for(var i = 0; i < students.length; i++)
{
    console.log(students[i].first_name + " "+ students[i].last_name);
}

var students = [
     {number:"1", first_name:  'Michael', last_name : 'Jordan',score: '13'},
     {number: "2", first_name : 'John', last_name : 'Rosales',score: '11'},
     {number: '3', first_name : 'Mark', last_name : 'Guillen',score: '11'},
     {number: '4', first_name : 'KB', last_name : 'Tonel',score: '7'}
];

var Instructors = [
     {number: '1', first_name:  'MICHAEL', last_name : 'CHOI',score: '11'},
     {number: '2', first_name : 'MARTIN', last_name : 'PURYEAR',score: '13'}
 ]
console.log("Students");
 for(var i = 0; i < students.length; i++)
 {
     console.log(students[i].number +" - "+ students[i].first_name + " "+ students[i].last_name+"-"+ students[i].score);

 }
console.log("Instructors");
 for(var i = 0; i < Instructors.length; i++)
 {
     console.log(Instructors[i].number +" - "+ Instructors[i].first_name + " "+ Instructors[i].last_name+ "-" +Instructors[i].score);
 }
