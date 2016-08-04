// Predict the output of the following (may be "undefined" or "error")
// 1.
function crazy(a, b, c, d) {
	if(a > 0) {
		return b(d(a));
	} else {
		return c(b(a));
	}
}
var output = crazy(5, function(a) {
	for(var i = 1; i < a; i++) {
		return a*i;
	}	
}, function(a) {
	return a-6;
}, function(a) {
	return a+7;
})
console.log(output);

// 2a.
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// 2b.
console.log(food);
food = "turkey";
mean();
function mean() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// 2c.
food = "turkey";
console.log(food);
mean();
function mean() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// Answer the following:
// 3. list the places where you see the "function" keyword (ex. as a standalone function) Hint: There are more than 5!

// 4. list all of the potential attribute values in a js object.

// 5. 
// Change the code below to print out:
// I know php and javascript
// LAMP is great
// but MEAN is cooler!

var oldlang = "php";
console.log("I know", oldlang, "and", newlang);
var newlang = "javascript";
var stack = "LAMP"
console.log("but", stack, "is cooler!")
decide();
var decide = function() {
	console.log(stack, "is great");
	var stack = "MEAN";
}
// think about 2 more ways to change the code to make it work after you finish 1



