// const breakfastPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Your order is ready for pick up');
//     }, 3000);
// })
// console.log(breakfastPromise);
// breakfastPromise.then(val => console.log(val));
function addFive(n) {
    return n + 5;
  }
  function double(n) {
    return n * 2;
  }
  function finalValue(nextValue) {
    console.log(`The final value is ${nextValue}`);
  }
  
  const mathPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      // resolve promise if 'value' is a number; otherwise, reject it
      if (typeof value === 'number') {
        resolve(value);
      } else {
        reject('You must specify a number as the value.')
      }
    }, 1000);
  });
  const value = 5;
mathPromise
  .then(double)
  .then(double)
  .then(double)
  .then(double)
  .then(finalValue)
  .catch( err => console.log(err) )