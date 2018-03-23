// const promise1 = new Promise((resolve, reject) => {
//   console.log('1');
//   resolve('1');
// });
// promise1.then(function(step) {
//   console.log('2');
//   return '2';
// }).then(function(step) {
//   console.log('end');
// }, function(error) {
//   console.log('error:' + error);
// })

getStepPromise(1)
  .then(step => {return getStepPromise(step);})
  .then(step => console.log(step),
        error => console.log('error2 ' + error));

// getStepPromise(1)
//   .then(step => {return getStepPromise(step);}, 
//         error => console.log('error1 ' + error))
//   .then(step => console.log(step),
//         error => console.log('error2 ' + error));

// getStepPromise(1)
//   .then(step => {return getStepPromise(step);})
//   .then(step => console.log(step));

function getStepPromise(step) {
  return new Promise((resolve, reject) => {
    console.log(step);
    //reject(step + 1);
    resolve(step + 1);
  });
}