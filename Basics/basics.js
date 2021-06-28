const { ContactSupportOutlined } = require("@material-ui/icons");

/*
var x = 10; // global
let y = 10; // block
for (var i = 0; i < 5; i++) {
  // block level access
  console.log(i); //0-4
}
console.log(i); // 5
for (let i = 0; i < 5; i++) {
  // block level access
  console.log(i); //0-4
}
//console.log(i); // undefined
*/
const a = 10;
// a=20;
console.log(typeof a);
console.log(typeof "test");
console.log(typeof true);

// function
function add(x, y) {
  return x + y;
}
console.log(add(10, 10));

console.log(typeof add);

// Object
const employee = {
  empId: 10001,
  empName: "Ram",
  empSalary: 35000.0,
};

console.log(typeof employee);
console.log(employee.empId);
console.log(employee.empName);
console.log(employee.empSalary);

// Array
const colors = ["red", "green", "orange"];
console.log(colors);
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.push("white");
console.log(colors);
colors.pop();
colors.pop();
console.log(colors);

const employees = [
  {
    id: 1001,
    name: "Ram",
    salary: 35000.0,
  },
  {
    id: 1002,
    name: "Sam",
    salary: 45000.0,
  },
  {
    id: 1003,
    name: "Ravi",
    salary: 25000.0,
  },
];

console.log(employees[1].name);
console.log(employees[2].salary);

const customer = {
  id: 2001,
  name: "Ravi",
  address: {
    city: "Chennai",
    state: "Tamilnadu",
  },
  contactNo: [9912312345, 9999911111],
};

console.log(customer.id);
console.log(customer.address);
console.log(customer.contactNo);
console.log(customer.address.city);
console.log(customer.contactNo[1]);

// default functional parameters
function sub(x = 40, y = 40) {
  return x - y;
}
console.log(sub()); //10
console.log(sub(100)); //60
console.log(sub(40, 50)); //-10

// Rest parameters
/*
function mul(x, y) {
  return x * y;
}
function mul1(x, y, z) {
  return x * y * z;
}
*/
function mul(...nums) {
  // nums=[]
  if (nums.length == 0) {
    return 0;
  }
  var result = 1;
  for (let i = 0; i < nums.length; i++) {
    //console.log(nums[i]);
    result = nums[i] * result;
  }
  return result;
}
//console.log(mul());
console.log(mul(2, 3));
console.log(mul(2, 3, 4));
console.log(mul(2, 3, 4, 5));

// Spread operator (...) - ES6 feature

const color = ["red", "green", "orange"];
//const newColors = ["White", "Black", ...color];
//const newColors = [...color, "White", "Black"];
const newColors = ["White", ...color, "Black"];
console.log(newColors);

// Destructuring - ES6
const person = {
  name: "Ravi",
  age: 40,
  address: {
    city: "Hyderabad",
    state: "Telangana",
  },
};
/*
person.name;
person.city;
person.age;
person.contNo;
*/
const { name, age, address } = person;
const { city, state } = address;
console.log(name);
console.log(age);
console.log(city);
console.log(state);

// array destructuring
const seasons = ["Summer", "Winter", "Rain"];
//seasons[0];
//seasons[1];
const [x, y, z] = seasons;
console.log(x);
console.log(y);
console.log(z);

// Arrow functions - ES6
/*function hello() {
  return "Hello";
}*/
const hello = () => "Hello";
console.log(hello);
console.log(hello());

const ad = (x, y) => x + y;
console.log(ad(10, 20));

// map, filter - ES6
newColors.map((color) => console.log(color));

// filter
const c = newColors.filter((color) => color.startsWith("W"));
console.log(c);