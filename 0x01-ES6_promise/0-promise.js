function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const x = 1 + 1;
    if (x === 2) {
      resolve('Success');
    } else {
      reject(new Error('Error'));
    }
  });
}

const promise = getResponseFromAPI();
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.name);
  });
