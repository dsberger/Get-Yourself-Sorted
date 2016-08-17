var expect = require('chai').expect
var partition = require('../lib/hoarePartition')

describe('Hoare partition', () => {
  context('with a one-element array', () => {
    it('returns 0', (done) => {
      var arr = [6]
      expect(partition(arr)).to.equal(0)
      done()
    })

    it('does note mutate the array', (done) => {
      var arr = [6]
      partition(arr)
      expect(arr).to.deep.equal([6])
      done()
    })
  })

  context('with a two-element array', () => {
    context('when the elements are sorted', () => {
      it('returns 0', (done) => {
        var arr = [3, 8]
        expect(partition(arr)).to.equal(0)
        done()
      })

      it('does not mutate the array', (done) => {
        var arr = [3, 8]
        partition(arr)
        expect(arr).to.deep.equal([3, 8])
        done()
      })
    })

    context('when the elements are not sorted', () => {
      it('returns 1', (done) => {
        var arr = [8, 3]
        expect(partition(arr)).to.equal(1)
        done()
      })

      it('mutates the array', (done) => {
        var arr = [8, 3]
        partition(arr)
        expect(arr).to.deep.equal([3, 8])
        done()
      })
    })
  })

  context('with a three-element array', () => {
    context('elements in descending order', () => {
      it('returns 2', (done) => {
        var arr = [9, 6, 3]
        expect(partition(arr)).to.equal(2)
        done()
      })

      it('mutates the array', (done) => {
        var arr = [9, 6, 3]
        partition(arr)
        expect(arr).to.deep.equal([6, 3, 9])
        done()
      })
    })

    context('elements in ascending order', () => {
      it('returns 0', (done) => {
        var arr = [3, 4, 5]
        expect(partition(arr)).to.equal(0)
        done()
      })

      it('does not mutate the array', (done) => {
        var arr = [3, 4, 5]
        partition(arr)
        expect(arr).to.deep.equal([3, 5, 4])
        done()
      })
    })

    context('elements in mixed order', () => {
      it('returns 1', (done) => {
        var arr = [3, 2, 6]
        expect(partition(arr)).to.equal(1)
        done()
      })

      it('mutates the array', (done) => {
        var arr = [3, 2, 6]
        partition(arr)
        expect(arr).to.deep.equal([2, 3, 6])
        done()
      })
    })
  })
}) 
