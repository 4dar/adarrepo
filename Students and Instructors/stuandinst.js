// var students = [ 
//     {first_name:  'Michael', last_name : 'Jordan'},
//     {first_name : 'John', last_name : 'Rosales'},
//     {first_name : 'Mark', last_name : 'Guillen'},
//     {first_name : 'KB', last_name : 'Tonel'}
// ]

// function Student(){
//     for(var i in students){
//         console.log(students[i].first_name + " " + students[i].last_name);
//     }
// }
// Student(students);

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }

function studentsAndInst(){
    var count = 0;
    for(var i in users){
        console.log(users);
    }
}
studentsAndInst(users);
