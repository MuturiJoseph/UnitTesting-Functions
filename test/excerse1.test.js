const lib = require('../excerse1');

describe('FizzBuzz',() => {
    it('should throw an exception if input is not a number',() => {
        expect(() => {lib.FizzBuzz('a')}).toThrow();
        expect(() => {lib.FizzBuzz(null)}).toThrow();
        expect(() => {lib.FizzBuzz(undefined)}).toThrow();
        expect(() => {lib.FizzBuzz({})}).toThrow();
    });

    it('should return FizzBuzz if input is divisible by 3 and 5',() => {
        const result = lib.FizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });

    it('should return Fizz if input is only divisible by 3',() => {
        const result = lib.FizzBuzz(3);
        expect(result).toBe('Fizz');
    });

    it('should return Buzz if input is only divisible by 5',() => {
        const result = lib.FizzBuzz(5);
        expect(result).toBe('Buzz');
    });

    it('should return input if input is not divisible by 3 or 5',() => {
        const result = lib.FizzBuzz(2);
        expect(result).toBe(2);
    });
})