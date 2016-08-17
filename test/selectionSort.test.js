var cases = require('./cases')
var expect = require('chai').expect
var sorting = require('../lib/sorting')

describe('Selection Sort', () => {
  it('sorts an array of ten', (done) => {
    expect(sorting.selectionSort(cases.ten)).to.deep.equal(cases.tenSorted)
    done()
  })

  it('sorts an array of one hundred', (done) => {
    expect(sorting.selectionSort(cases.hundred)).to.deep.equal(cases.hundredSorted)
    done()
  })

  it('sorts an array of one thousand', (done) => {
    expect(sorting.selectionSort(cases.thousand)).to.deep.equal(cases.thousandSorted)
    done()
  })

  it('sorts an array of ten thousand', (done) => {
    expect(sorting.selectionSort(cases.tenThousand)).to.deep.equal(cases.tenThousandSorted)
    done()
  })

})
