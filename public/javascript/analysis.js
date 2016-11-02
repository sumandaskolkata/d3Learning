var _DATA = [40,18,58,59,58,12,20,88,76,56];
var colorScale = d3.scaleLinear()
    .domain([0,100])
    .range(["skyblue","blue"]);

var i = d3. interpolateRgb(	'#00FFFF','#0000FF');
var interpolate = d3.interpolate("skyblue","blue")
var createBarChart = function(){
    d3.select(".container").append("div").classed("barChart",true);
    _DATA.shift();
    _DATA.push(_.random(1,100))
     d3.select(".barChart").selectAll("div")
        .data(_DATA)
        .enter().append("div")
        .text(function(d){return d})
        .style("width",function(d){ return d*4+"px" })
        .style("height","25px")
        .style("margin-bottom","1px")
        .style("margin-top","1px")
        .style("background-color",function(d){
            var float = parseFloat("0."+d)
            return i(float);
        })
        .classed("bar",true); 
    setInterval(updateChart,1000);
        
}

var updateChart = function(){
    _DATA.shift();
    _DATA.push(_.random(1,100))
    var bars = d3.select(".barChart").selectAll("div")
        .data(_DATA)

    bars.style("width",function(d){ return d*4+"px" })
        .text(function(q){return q})
        .style("height","25px")
        .style("margin-bottom","2px")
        .style("background-color",function(d){
            var float = parseFloat("0."+d)
            return i(float);
        })        
        .classed("bar",true); 
}
window.onload = createBarChart;