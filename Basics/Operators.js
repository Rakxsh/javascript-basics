// var num1 = 7;
// var num2 = 10;
// var answer = num1 > num2;
// console.log(answer);

// Discount = (Listprice - SellingPrice)/Listprice * 100;

var sellingPrice = 199;
var listPrice = 799;

var discountPrice = ((listPrice-sellingPrice)/listPrice) * 100;
console.log("discount price is" + discountPrice);


var displayDiscountPercentage = Math.round(discountPrice);
console.log(displayDiscountPercentage + "% off");

var result = listPrice > sellingPrice;
console.log(typeof result);



