
// string slicing
var ans = ("Ashutosh ")
var sp = ans.slice(0, 4)

// template literals , here different type pf quotes are used
console.log(`hey my name is ${ans} and my age is ${20 + 4}`);


// split
var sample_string = ("hi this is a sample string to use for split operation")
var st = sample_string.split("i") //this will split over i aplhabet

// replace
var rep = sample_string.replaceAll(" ", '_')

//includes
var inc = sample_string.includes(`${ans}`)
var inc = ans.includes(`${ans}`)



