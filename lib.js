const db = require('./db');

module.exports.absolute = function(number){
    //testing number
    return (number >= 0) ? number : -number;
}

module.exports.greeting = function(name){
    //testing strings
    return 'Welcome ' + name + '!';
}

module.exports.getCurrencies = function(){
    //testing arrrays
    return ['USD','AUD','EUR'];
}

module.exports.getProduct = function(productId){
    //testing objects
    return {id:productId,price:10};
}

module.exports.registerUser = function(username){
    //testing exceptions
    if(!username) throw new Error('Username is required')

    return {id:new Date().getTime(),username:username};
}

//mock functions

module.exports.applyDiscount = function(order){
    const customer = db.getCustomerSync(order.customerID);

    if(customer.points > 10)
      order.totalPrice *=0.9;
}                                                                                                                                                                                                                                                                                          