var user = {
    firstName : "Rakesh",
    lastName : "A",
    role: "Analyst",
    loginCount : 32,
    facebookSignedIn : true
};

console.log(user.firstName);
console.log(user["lastName"]);

user.loginCount =44;
console.log(user.loginCount);

console.table(user);


var mobile = {
    name : "samsung",
    model : "s7",
    price : "45000",
    yearRealease : 2015

}
console.log(mobile);
console.table(mobile);