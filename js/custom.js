window.onload = async function(){

// set the dimensions and margins of the graph
var margin = {top: 10, right: 50, bottom: 10, left: 50},
  width = window.innerWidth - margin.left - margin.right,
  height = 800 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

        

// Read data
d3.json("https://raw.githubusercontent.com/pcardosolei/pcardosolei.github.io/master/info.json", function(data) {
  // Give the data to this cluster layout:
  var root = d3.hierarchy(data).sum(function(d){ return d.value}) // Here the size of each leave is given in the 'value' field in input data

  // Then d3.treemap computes the position of each element of the hierarchy
  d3.treemap()
    .size([width, height])
    .paddingTop(28)
    .paddingRight(7)
    .paddingInner(3)      // Padding between each rectangle
    //.paddingOuter(6)
    //.padding(20)
    (root)

  // prepare a color scale
  var color = d3.scaleOrdinal()
    .domain(["boss1", "boss2", "boss3"])
    .range([ "#402D54", "#D18975", "#8FD175"])

  // And a opacity scale
  var opacity = d3.scaleLinear()
    .domain([10, 30])
    .range([.5,1])

  // use this information to add rectangles:
  svg
    .selectAll("rect")
    .data(root.leaves())
    .enter()
    .append("rect")
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('width', function (d) { return d.x1 - d.x0; })
      .attr('height', function (d) { return d.y1 - d.y0; })
      .style("stroke", "black")
      .style("fill", function(d){ return color(d.parent.data.name)} )
      .style("opacity", function(d){ return opacity(d.data.value)})

  // and to add the text labels
  svg
    .selectAll("text")
    .data(root.leaves())
    .enter()
    .append("text")
      .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
      .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
      .text(function(d){ return d.data.name.replace('mister_','') })
      .attr("font-size", "19px")
      .attr("fill", "white")

  // and to add the text labels
  svg
    .selectAll("vals")
    .data(root.leaves())
    .enter()
    .append("text")
      .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
      .attr("y", function(d){ return d.y0+35})    // +20 to adjust position (lower)
      .text(function(d){ return d.data.value })
      .attr("font-size", "11px")
      .attr("fill", "white")

  // Add title for the 3 groups
//   svg
//     .selectAll("titles")
//     .data(root.descendants().filter(function(d){return d.depth==1}))
//     .enter()
//     .append("text")
//       .attr("x", function(d){ return d.x0})
//       .attr("y", function(d){ return d.y0+21})
//       .text(function(d){ return d.data.name })
//       .attr("font-size", "19px")
//       .attr("fill",  function(d){ return color(d.data.name)} )

  // Add title for the 3 groups
  svg
    .append("text")
      .attr("x", 0)
      .attr("y", 14)    // +20 to adjust position (lower)
      .text("Three group leaders and 14 employees")
      .attr("font-size", "19px")
      .attr("fill",  "grey" )

})
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'info.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}
