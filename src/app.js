document.body.innerHTML = `Hello from <h3> ${d3.version} </h3>`;

// LINEAR SCALE

// scaleLiner method takes a continuous input domain and maps it to a continuous output range and mantains proportions


// var linearScale = d3.scaleLinear()
//   .domain([0, 100])
//   .range([0, 1])

// // examples
// console.log(linearScale(0))   // 0
// console.log(linearScale(50))  // 0.5
// console.log(linearScale(100)) // 1

// var linearScale = d3.scaleLinear()
//   .domain([0, 100])
//   .range([0, 600])
//   .clamp(true);
  
// clamp method sets a fixed limit

// examples
// console.log(linearScale(-20)) // 0
// console.log(linearScale(0))   // 0
// console.log(linearScale(50))  // 300
// console.log(linearScale(100)) // 600
// console.log(linearScale(105))  // 600 (not 630) due to clamp method

// invert method maps back to the domain value from the range value
// console.log(linearScale.invert(300))  // 50


// DATES

// var timeScale = d3.scaleTime()
//   .domain( [new Date(2016, 0, 1), new Date()] )
//   .range([0, 100]);

// console.log( timeScale(new Date(2016, 3, 1))) // 8.457461183512908
// console.log( timeScale(new Date())) // 100.00000000215235 (out of range bc time has passed)

// this finds the mid point
// console.log( timeScale.invert(50) );  // 'Wed Jun 21 2017 18:46:08 GMT-0700 (Pacific Daylight Time)' 




// QUANTIZE SCALE


// var quantizeScale = d3.scaleQuantize()
//   .domain([0, 100])
//   .range([0, 600])

// console.log(quantizeScale(22))   // 0


var quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(["red", "white", "green"])

//console.log(quantizeScale(22))   // 132  example pre quantize output
console.log(quantizeScale(22))   // red
console.log(quantizeScale(49))   // white
console.log(quantizeScale(50))   // white
console.log(quantizeScale(88))   // green
console.log(quantizeScale(99))   // green

// invert extent shows the domain limits for that range
console.log(quantizeScale.invertExtent("red"))  //  [0, 33.333333333333336]
console.log(quantizeScale.invertExtent("white")) // [33.333333333333336, 66.66666666666667]
console.log(quantizeScale.invertExtent("green")) // [66.66666666666667, 100]


