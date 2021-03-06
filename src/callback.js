// This function should retrieve the status code of a GET request to 'URL'

//=========
//   CB
//=========
let getStatusCode = (url, callback) => {
  request.get(url, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.statusCode);
    }
  });
};
// CB invocation
getStatusCode('http://localhost:3000/getStatusCode', (err, statusCode) => {
  if (err) {
    console.error(err);
  } else {
    console.log(statusCode);
  }
});

//===========
// PROMISES
//===========
let getStatusCodeAsync = (url) => {
  return new Promise({resolve, reject} => {
    request.get(url, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.statusCode);
      }
    });
  });
};
// PROMISES invocation
getStatusCodeAsync('http://localhost:3000/getStatusCode')
  .then(statusCode => console.log(statusCode))
  .catch(err => console.error(err));

//========================
// ASYNC AWAIT invocation
//========================
async function asyncGetStatusInvocation() {
  try {
    const response = await getStatusCodeAsync('http://localhost:3000/getStatusCode');
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}