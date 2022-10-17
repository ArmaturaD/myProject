// const { car, carWithPassengers } = require("../spread");

const { compileAndroidCode } = require("../spread");


// describe('test object', function (){
//     test ('color  car, name ', () => {
//      expect(car.color).toContain ( "green")
//      expect(car.driver.name).toContain ( "Vasay")
//     })  
//      test ('model  carWithPassengers', () => {  
//         expect(carWithPassengers.model).toContain ( "BMW")
//      })


//     })

describe('compiling', function (){

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
})
})
