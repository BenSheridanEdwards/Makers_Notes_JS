/*

  describe('function', () => {
    it('has a behaviour', () => {
      expect(expect).toEq(value)
    })
  })

  describe('function', () => {
    describe('.method', () => {
      it('has a behaviour', () => {
        expect(expect).isInstanceOf(value)
      })
    })
  })

*/

const describe = (description, callback) => {
  console.log(description)
  callback()
}

const it = (msg, callback) => {
  describe(`  ${msg}`, callback)
}

const matchers = (expect) => ({
  toEq: (value) => {
    if (expect === value) {
      console.log('%c    Passed', 'color: #00ff00')
    } else {
      console.log(`%c    Failed. (expected ${expect} to equal ${value})`, 'color: #ff0000')
    }
  },
  isInstanceOf: (value) => {
    if (expect instanceof value) {
      console.log('%c    Passed', 'color: #00ff00')
    } else {
      console.log(`%c    Failed. (expected ${expect} to be instance of ${value})`, 'color: #ff0000')
    }
  },
  includes: (value) => {
    if (expect.includes(value)) {
      console.log('%c    Passed', 'color: #00ff00')
    } else {
      console.log(`%c    Failed. (expected ${expect} to include ${value})`, 'color: #ff0000')
    }
  },
  toBeEmpty: (value) => {
    if (value.length == 0) {
      console.log('%c    Passed', 'color: #00ff00')
    } else {
      console.log(`%c    Failed. (expected both ${expect} and ${value} to be empty)`, 'color: #ff0000')
    }
  }
})

const expect = (expect) => matchers(expect)
