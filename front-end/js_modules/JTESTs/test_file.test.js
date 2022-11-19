//const { default: TestRunner } = require("jest-runner");
const addfive = require('./test_file')

test('returns number + 5', () => {
    expect(addfive(2)).toBe(9)
})