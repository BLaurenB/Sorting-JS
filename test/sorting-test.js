const assert = require('chai').assert
const someSort = require('../sorting')

describe('Sorting Suite', function () {
  context('bubble sort', function () {
    it('can sort an array', function () {
      assert.deepEqual(someSort([1,5,3,4,2]), [1,2,3,4,5])
      assert.deepEqual(someSort([78, 88, 13, 35, 1, 99, 4, 2, 1002, 321, 221, 77, 0, 1000]
), [0, 1, 2, 4, 13, 35, 77, 78, 88, 99, 221, 321, 1000, 1002]
)
    })
  })
})
