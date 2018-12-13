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
  
// d3.select('.chart')
//   .append('svg')
//     .attr('width', 225)
//     .attr('height', 300)
//   .selectAll('rect')
//   .data(scores)
//   .enter()
//     .append('rect')
//     .attr('y', (d, i) => i * 33)
//     .text( function (d) {
//       return  d.name;
//     })
//     .style('width', d => d.score)
//     .attr('class', 'bar')
  
  
  
// SVG Graphics Containers and Text Elements in D3 v4

// let bar = d3.select('.chart')
//   .append('svg')
//     .attr('width', 225)
//     .attr('height', 300)
//   .selectAll('g')
//   .data(scores)
//   .enter()
//     .append('g')
//     .attr('transform', (d, i) => 'translate(0,' + i * 33 + ')')
    
// bar.append('rect')
//   .style('width', d => d.score)
//   .attr('class', 'bar')
  
// bar.append('text')
//   .attr('y', 20)   
//   .text( function (d) {
//     return  d.name;
//   })



  // Basic Interactivity with D3 v4
  
// let bar = d3.select('.chart')
//   .append('svg')
//     .attr('width', 225)
//     .attr('height', 300)
//   .selectAll('g')
//   .data(scores)
//   .enter()
//     .append('g')
//     .attr('transform', (d, i) => 'translate(0,' + i * 33 + ')')
    
// bar.append('rect')
//   .style('width', d => d.score)
//   .attr('class', 'bar')
//   .on('mouseover', function (d, i, elements) {
//     //d3.select(this).classed('barOn', true);
//     d3.select(this).style('transform', 'scaleX(2)');
//     d3.selectAll(elements)
//       .filter(':not(:hover)')
//       .style('fill-opacity', 0.5)
      
//   })
//   .on('mouseout', function (d, i , elements) {
//     //d3.select(this).classed('barOn', false)
//     d3.select(this).style('transform', 'scaleX(1)');
//     d3.selectAll(elements)
//       .style('fill-opacity', 1)
//   })
  
// bar.append('text')
//   .attr('y', 20)   
//   .text( function (d) {
//     return  d.name;
//   })
  
  
// Better Code Organization with selection.call() with D3 v4

let bar = d3.select('.chart')
  .append('svg')
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('g')
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => 'translate(0,' + i * 33 + ')')
   
function scaleBar (selection, scale) {
  selection.style('transform', 'scaleX(' + scale + ')')
} 

function setFill (selection, color) {
  selection.style('fill', color);
}

function fade (selection, opacity) {
  selection.style('fill-opacity', opacity);
}

bar.append('rect')
  .style('width', d => d.score)
  .attr('class', 'bar')
  .on('mouseover', function (d, i, elements) {
    
    d3.select(this)
      .call(scaleBar, 2)
      .call(setFill, 'orange');
    
    d3.selectAll(elements)
      .filter(':not(:hover)')
      .call(fade, 0.5)
      
  })
  .on('mouseout', function (d, i , elements) {
    
    d3.select(this)
      .call(scaleBar, 1)
      .call(setFill, 'lightgreen');
     
    d3.selectAll(elements)
      .call(fade, 1)
  })
  
  
bar.append('text')
  .attr('y', 20)   
  .text( function (d) {
    return  d.name;
  })
  
  
  
  