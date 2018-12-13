//document.body.innerHTML = `Hello from <h3> ${d3.version} </h3>`;

// Start Visualizing Data Driven Documents with D3 v4

var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];


// var update = d3.select('.chart')
//   .selectAll('div')
//   .data(scores, function (d) {
//     return d ? d.name : this.innerText
//   })
//   .style('color', 'blue')
  
// let enter = update.enter()
//   .append('div')
//   .text( function (d) {
//     return  d.name;
//   })
//   .style('color', 'green');
  
  
// update.exit().remove();

// update.merge(enter)
//   .style('width', d => d.score + 'px')
//   .style('height', '50px')
//   .style('background', 'lightgreen')
//   .style('border', '1px solid black')
  
  
  // Output SVG Elements with D3 v4
  
d3.select('.chart')
  .append('svg')
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('rect')
  .data(scores)
  .enter()
    .append('rect')
    .attr('y', (d, i) => i * 33)
    .text( function (d) {
      return  d.name;
    })
    .style('width', d => d.score)
    .attr('class', 'bar')
  
  