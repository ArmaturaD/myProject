const { basicOp } = require("../JestTest");


describe ( "sum number", function () {
    test("sum", function () {
        expect(basicOp("-", 4, 7)).toBe(-3)
        expect(basicOp("-", " 4", 7)).toBe(-3)
    })
})
