

// // *****Regular function*****

// function avg(a,b,c,d){
//     return (a+b+c+d)/4;
// }
// console.log("LN 8: ",avg(2,5,7,5)); //4.75 ans




// // *****Variable function or Function Expression*****

// var average= function(a,b,c,d){
//     return (a+b+c+d)/4;
// }
// console.log("LN 18: ",average(2,5,7,5)); //4.75 ans




// // *****ARROW FUNCTION*****
// // arrow function is introduced in ES6 version of javascript

// // - arrow function with return value

// var average = (a,b,c,d)=> {return (a+b+c+d)/4};
// console.log("LN 25: ",average(2,5,7,5)); //4.75 ans



// // - arrow function without return value

// var average = (a,b,c,d)=> (a+b+c+d)/4;
// console.log("LN 32: ",average(2,5,7,5));  // 4.75 ans



// let trial = ()=> {console.log("Hello world");};
// console.log(trial());

// // - arrow function wuthout parameters

// const sub = () => { 
//     var s = 2-1;
// return s;
// };
// console.log("LN 41: ",sub());


// // - arrow function without variable declaration
// getTime = () => new Date();
// console.log("Time using an arrow function: ", getTime());


