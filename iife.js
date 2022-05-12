// *****IIFE function*****
// this type of don't need a call to execute as when this function is uploaded it will execute immediately.

(function (){
    console.log("Ln 5: It's an  IIFE function");
})();
// _________________________________________________________________________________________________________




// *****IIFE function in arrow signature*****

(()=> {console.log("Ln 14: IIFE function in arrow signature")})();

// ____________________________________________________________________________________________________________




// *****return value inside IIFE function*****
// for getting the return value we have to call the function experience

// const get = (()=>{console.log("Greetings of the day");
// return 45;})();

// console.log(get);
// __________________________________________________________________________________________________________




// *****Alert message by IIFE function*****

// (()=>{alert("Welcome to the Ritesh Page");})();

// ___________________________________________________________________________________________________________










// VSS class code

// const a = (() => {
//     for (let i = 6; i < 20; i++) {
//       console.log(i);
//       if (i === 6) {
//         return 234567;
//       }
//     }
//   })();

//   console.log(a);


// const getDetails = (function (a) {
//     console.log("I am a get Details function");
//     for (let i = 0; i < a; i++) {
//       console.log(i);
//     }
//     return 20;
//   })(100);

//   console.log(getDetails);



