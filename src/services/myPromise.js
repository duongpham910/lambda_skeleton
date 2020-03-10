exports.myPromise = () => {
  return firstMethod()
    .then(secondMethod)
    .then(thirdMethod)
}

function firstMethod() {
  var promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve({ data: 'first method' })
    }, 2000)
  })
  return promise
}

function secondMethod(someStuff) {
  var promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve({ newData: someStuff.data + ' second method' })
    }, 2000)
  })
  return promise
}

function thirdMethod(someStuff) {
  var promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve({ result: someStuff.newData + ' final method' })
    }, 3000)
  })
  return promise
}
