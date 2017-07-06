// var names = ['Jairo', 'Julie', 'Jen'];
// var person = {
//     name: 'Andrew',
//     greet: function() {
//         //names.forEach(function(name) {
//            // console.log(this.name + ' says hi to ' + name);
//             /*  undefined says hi to Jairo
//                 undefined says hi to Julie
//                 undefined says hi to Jen */
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//             /*  Andrew says hi to Jairo
//                 Andrew says hi to Julie
//                 Andrew says hi to Jen */
//         });
//     }
// };
// person.greet();


// Challenge Area

function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));
console.log(addStatement(2,2));
console.log(addExpression(3,3));
