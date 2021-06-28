// for each

// const myStates = [
//     "tamilnadu", 
//     "delhi",
//     "karnataka",
//     "andhra",
//      "kerala"
//     ];

//   myStates.forEach( (s) => (console.log(s)));

  //forin and forof loop in ES6 

  const names = ["youtube", "facebook", "instagram","netflix", "amazon"];

  // for of is majorly used in array
  for(const n of names){
      console.log(n);
  }

//for in is used in objects
  const symbols = {
      yt : "youitube",
      ig : "instafgram",
      fb : "facebook"
  };

  for (const n in symbols){
      console.log(symbols[n]);

      console.log(`key is ${n} and value is : ${symbols[n]}`);
  }


