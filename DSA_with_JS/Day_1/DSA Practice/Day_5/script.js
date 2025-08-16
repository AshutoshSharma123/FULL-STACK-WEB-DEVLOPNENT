//Arrays
var a = [2, 4, 5, 6, 7, 7]
console.log(a)
for (const p of a) {
    console.log(p);
}

// other way to form an array
var arr = new Array(100);
for (var i = 0; i < 100; i++) {
    arr[i] = i;
}
console.log(arr);

// in js we can save arrays of different datatype i.e. here arrays are not homogeneous. here arrays are heterogeneous but still it's preferred to store data in homogeneous format

var arr_2 = ["Ashutosh", 32, function () { }, NaN, true]
console.log(arr_2);


//Objects ->a collection of heterogeneous key-value pair of one entity
var obj = {
    name: 'Ashu',
    age: 24,
    sex: 'M',
    password: "Ashu123"
}
console.log(obj);
console.log(obj.name, obj.age);


//other way to create object
var obj_2 = new Object();
obj_2.name = "ashutosh";
obj_2.age = 23;
obj_2.sex = "MALE";


console.log(obj_2);







