var namer = "rakesh";

console.log("Line num 3 ", namer);
sayName();

function sayName(){
    var name = "mr r";
    console.log("Line num 8 ", namer);
    sayNameTwo();
    function sayNameTwo(){
        console.log("Loine num 11", namer);
    }
}

