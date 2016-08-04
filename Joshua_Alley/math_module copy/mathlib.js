module.exports = function (){
  return {
    add: function(num1, num2) {
         console.log('Sum = ' +(num1 + num2));
       },
    multiply: function(num1, num2) {
        console.log('Product = '+(num1 * num2));
       },
    square: function(num) {
         console.log('Square = '+(num * num));
       },
    random_number: function(num1, num2) {
        console.log('Random Number ='+(Math.floor((Math.random(num1,num2)))));
        console.log('Random Number ='+ (Math.floor(Math.random()*num2)+num1))
    }
  }
}();
