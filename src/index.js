
exports.min = function min (array) {
  let result = []  
  if (array === undefined || array.length === 0){
    result.push(0)
  } else {
    result = array.sort((elemA, elemB) => { return elemA - elemB})  
  }
  return result[0]
}

exports.max = function max (array) {
  let result = []  
  if (array === undefined || array.length === 0){
    result.push(0)
  } else {
    result = array.sort((elemA, elemB) => { return -(elemA - elemB)})  
  }
  return result[0]
}

exports.avg = function avg (array) {
  let result = 0  
  if (array === undefined || array.length === 0){
    return 0
  } else {
    result = array.reduce((acc, elem) => {return acc += elem}, 0)  
  }
  return (result / array.length)
}
