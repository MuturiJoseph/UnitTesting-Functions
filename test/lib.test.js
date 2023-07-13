const db = require('../db');
const lib = require('../lib');

describe('absolute',() => {
    it('returns positive number when the input is positive',()=>{
        const result = lib.absolute(1);
        expect(result).toBe(1);
    }); 
    
    it('returns positive number when the input is negative',()=>{
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    }); 
    
    it('returns 0 when the input is 0',()=>{
        const result = lib.absolute(0);
        expect(result).toBe(0);
    }); 
});

describe('greet',() => {
    it('should return the greeting message',() => {
        const result = lib.greeting('Muturi');
        expect(result).toContain('Muturi');
    })
});

describe('getCurrencies',() => {
    it('should return supported currencies',() => {
        const result = lib.getCurrencies();
        expect(result).toEqual(expect.arrayContaining(['EUR','AUD','USD']))
    })
});

describe('getProduct',() => {
    it('should return product with the given id',() => {
        const result = lib.getProduct(1);
        expect(result).toMatchObject({id:1,price:10});
    })
});

describe('registerUser',() => {
    it('Throw if username is falsy',() => {
        const args = [null,undefined,NaN,'',0,false];
        args.forEach(a => {
            expect(() => lib.registerUser(a).toThrow());
        });
    });
    it('should return a user object if a valid username is passed',() => {
        const result = lib.registerUser('Muturi');
        expect(result).toMatchObject({username:'Muturi'});
        expect(result.id).toBeGreaterThan(0);
    })
});

describe('applyDiscount',() => {
    it('should apply 10% discount if customer has more than 10 points',() => {
        db.getCustomerSync = function(customerId){
            console.log('Fake reading customer...');
            return {id:customerId,points:20};
        }

        const order = {customerId:1,totalPrice:10};
        lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9);
    });
});