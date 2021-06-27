
tipper("10");
  //runs here to based on global context

 
function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 10);
} 


                             // Function declarations are scanned and  made available.
//var  bigtipper = function(a){ // variable declarations are scanned and made undefined in global context 
    function bigtipper(a){
    var bill = parseInt(a);
    console.log(bill + 50);
}
bigtipper("50");

console.log(name);
var name = "rakesh";

function sayName(){
    var name = "Mr. rakesh"
    console.log(name);
}

sayName();
console.log(name);