var testArray = [2,4,6,3,1,5,9,8];

console.log(testArray.fill("h", 2, 5));

const myNumbers = [23,23,25,55,66,77,87,98];

const result = myNumbers.filter((num)=> num<55);
console.log(result);


//slice and splice in javascript


var users = ["ted", " tim", " sam", "tom","cammy"];
// console.log(users.slice(1));
users.splice(1,2,"Hi","bye");
console.log(users);