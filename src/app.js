document.body.innerHTML = `Hello from <h3> ${d3.version} </h3>`;

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

var timeScale = d3.scaleTime()
  .domain( [new Date(2016, 0, 1), new Date()] )
  .range([0, 100]);

console.log( timeScale(new Date(2016, 3, 1))) // 8.457461183512908
console.log( timeScale(new Date())) // 100.00000000215235 (out of range bc time has passed)

// this finds the mid point
console.log( timeScale.invert(50) );  // 'Wed Jun 21 2017 18:46:08 GMT-0700 (Pacific Daylight Time)' 

