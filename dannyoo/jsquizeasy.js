// predict the output of the following
// 1. 
console.log(hello);
var hello = "hello";

// 2.
var funky = "hi";
test();
function test() {
	var funky = "hello";
	console.log(funky);
}

// 3.
var jay = "awesome";
function print() {
	jay = "super";
	console.log(jay);
}
console.log(jay);

// 4. 
var food = "chicken";
console.log(food);
eat();
function eat() {
	food = "half-chicken";
	console.log(food);
	var food = "gone";
}
console.log(food);

// 5.
function caller(a, b, c) {
	console.log(a);
	console.log(c(b(a)));
	return b(a);
}
var result = caller(5, function(num) {
	var sum = a;
	for(var i = 0; i < a; i++) {
		sum -= i;
	}
	return sum
}, function(num) {
	if(num > 0) {
		return num;
	} else {
		return 0;
	}
})
console.log(result);

// Answer the following:
// 6. list the places where you see the "function" keyword (ex. as a standalone function) Hint: There are more than 5!

// 7. list all of the potential attribute values in a js object.

