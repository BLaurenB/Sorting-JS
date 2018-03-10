require 

let array = [1, 5, 4, 2, 3]

function someSort (array) {
  for (i = 0; i < array.length; i++) {
    updatedArray = array.map(function (num, index) {
      if (array[index - 1] === null) {
        return array
      } else if (array[index] > array[index + 1]) {
        return ([array[index + 1], array[index]] = [
          array[index],
          array[index + 1]
        ])
      } else {
        return array
      }
    })
  }
  return updatedArray[0]
}

module.exports = someSort

// console.log(someSort([78, 88, 13, 35, 1, 99, 4, 2, 1002, 321, 221, 77, 0, 1000]))

