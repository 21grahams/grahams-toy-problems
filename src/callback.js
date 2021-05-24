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
let getStatusCodeAsync = function(url) {
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