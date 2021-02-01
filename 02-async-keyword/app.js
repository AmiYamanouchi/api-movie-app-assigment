// function greet(){
//     return 'HELLO!'
// }

async function greet() {
  return "HELLO!";
}

// greet().then((val) => {
//   console.log(val);
// });

//Promise way....
// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== "number" || typeof y !== "number") {
//       reject("X and Y must be numbers");
//     }
//     resolve(x + y);
//   });
// }

//Async way.....
async function add(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw 'X and Y must be numbers';
    }
    return x + y;
}

const sum = add(6, 9)
    .then((val) => console.log(val))
    .catch((err) => console.log(err))
    
console.log(sum);
