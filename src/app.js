//document.body.innerHTML = `Hello from <h3> ${d3.version} </h3>`;

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


// var quantizeScale = d3.scaleQuantize()
//   .domain([0, 100])
//   .range(["red", "white", "green"])

// //console.log(quantizeScale(22))   // 132  example pre quantize output
// console.log(quantizeScale(22))   // red
// console.log(quantizeScale(49))   // white
// console.log(quantizeScale(50))   // white
// console.log(quantizeScale(88))   // green
// console.log(quantizeScale(99))   // green

// // invert extent shows the domain limits for that range
// console.log(quantizeScale.invertExtent("red"))  //  [0, 33.333333333333336]
// console.log(quantizeScale.invertExtent("white")) // [33.333333333333336, 66.66666666666667]
// console.log(quantizeScale.invertExtent("green")) // [66.66666666666667, 100]


// ORDINAL SCALE

// var ordinalScale = d3.scaleOrdinal()
//   .domain(["poor", "good", "great"])
//   .range(["red", "white", "green"])

// console.log(ordinalScale("poor")); // red
// console.log(ordinalScale("great"));  // green
// console.log(ordinalScale("good")); // white




// Load and Inspect Data

// d3.json('data/data.json', (data) => {
//   console.log(data);
// });

// d3.csv('data/data.csv', (data) => {
//   console.log(data);
// });

// d3.tsv('data/data.tsv', (data) => {
//   console.log(data);
// });


// d3.json('data/data.json', (data) => {
  
//   let min = d3.min(data, (d) => {
//     return d.age;
//   })
  
//   let max = d3.max(data, (d) => {
//     return d.age;
//   })
  
//   let extent = d3.extent(data, (d) => {
//     return d.age;
//   })
  
//   console.log(min);  // 13
//   console.log(max);  // 38
//   console.log(extent) // [13, 38]
  
//   // create a scale from extent
  
//   let scale = d3.scaleLinear()
//     .domain(extent)
//     .range([0, 600])
    
//   console.log(scale(24)) // 264
//   console.log(scale(37))  // 576
  
//   // create a unique set of values, no duplicates
  
//   let agesUnique = d3.set(data, (d) => {
//     return d.age;
//   })
  
//   console.log(agesUnique.values())  // ["23", "38", "13", "37"]
  
// });





// Select DOM Elements with D3 v4

//var link = d3.selectAll('a');
// console.log(link.nodes())

// var div = d3.select('div');
// var divLinks = div.selectAll('a');
// console.log(divLinks.nodes())  // [a, a, a]

// also can use css syntax
// console.log(div.selectAll('div a').nodes())

// var actionLink = d3.select('.action');
// console.log(actionLink.nodes())  // [a.action]

// var secondLink = d3.selectAll('a:nth-child(2)');
// console.log(secondLink.nodes());  // [a]


// var allLinks = d3.selectAll(document.links);
// console.log(allLinks.nodes())  // [a, a, a, a.action]
// console.log(allLinks.size())  // 4




// Modify DOM Elements with D3 v4

// var secondLink = d3.selectAll('a:nth-child(2)');
// console.log(secondLink.nodes());       // [a]
// console.log(secondLink.attr('href'))   // #   // single argument is a getter
// secondLink.attr('href', 'http://google.com')  // double argument is a setter
// console.log(secondLink.attr('href'));  // http://google.com

var secondLink = d3.selectAll('a:nth-child(2)')
  
//console.log(secondLink.attr('href'))


// d3.selectAll('a:nth-child(2)')
//   .attr('href', 'http://google.com')
//   .style('color', 'red');

// console.log(secondLink.attr('href'));
// console.log(secondLink.attr('style'))

d3.selectAll('a:nth-child(2)')
  .attr('href', 'http://google.com')
  .classed('red', 'true')
  .html('Inventory <b>SALE</b>')








