// callbacks
function throwTheDice (cb) {
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    cb(randomNum);
  }, 3000);
}

// throwTheDice((num) => {
//   console.log('el dado dice', num);
// });

// promises
function throwTheDiceWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      if(randomNum <= 3 ){
        resolve(randomNum);
      } else {
        reject('mayor que 4')
      }
    }, 3000);
  });
}

// console.log(throwTheDiceWithPromise());

throwTheDiceWithPromise()
  .then((num) => {
    console.log('el dado dice', num);
    // throwTheDiceWithPromise();
    return throwTheDiceWithPromise()
  })
  .then((str) => { 
    console.log('complete', str)
  })
  .catch((error) => {
    console.log('error', error);
  })
