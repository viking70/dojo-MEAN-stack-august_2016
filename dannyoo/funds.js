//Multipy Everything by Five.

var myarr = [1,5,34,345,65];

// for (var index in myarr){
//     console.log(myarr[index]*5);
// }

for (var i = 0; i < myarr.length; i++){
console.log(myarr[i]*5);
console.log('The Right Way');
};

var myobject = {
                language: "Javascript",
                dojo: "Washington, DC",
                favorite_instructor: "Minh, no wait Dan... AHHHHHhHhhHH"
}

// Object.keys(myobject).forEach(function(key,value){console.log(key, value, myobject[key]);
// })

for (var key in myobject){
        console.log(key, myobject[key] + " the value");
}
