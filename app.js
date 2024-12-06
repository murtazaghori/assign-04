// const arrays = [
//     42,
//     true,
//     "Hello World!",
//     {
//         name: "John",
//         age: 25,
//         isStudent: false,
//     },
//     false,
//     3.14,
//     "JavaScript is fun!",
// ];
// //QUES#01

// let stringArr = arrays.map((element , index) => {
//     return element.toString();
// });
// console.log(stringArr);

// // QUES#02
// let arr = arrays.filter((element , index) => {
//     return typeof element === 'number';
// });

// console.log(arr);

// //QUES#03

//   arrays.forEach((element , index) => {
//     console.log(typeof element);  
//   });
  

// //QUES#04
  
//   let sum = arrays.reduce((number, element) => {
//     if (typeof element === 'number') {
//       return number + element; 
//     }
//     return number; 
//   }, 0);  
  
//   console.log(sum);
  
// //QUES#05
  
//   let firstBoolean = arrays.find((element , index) =>{
//     return typeof element === 'boolean'
//   });
  
//   console.log(firstBoolean);
  
// //QUES#06

// let index = arrays.findIndex((element , index) =>{
//     return typeof element === 'object' && element !== null
// }); 


// console.log(index);

// // QUES#07

// let containNumbers = arrays.some((element) =>{
//     return typeof element === 'number'
// });

// console.log(containNumbers);

// //QUES#08

// let allStrings = arrays.every((element) =>{return typeof element === 'string'});

// console.log(allStrings);