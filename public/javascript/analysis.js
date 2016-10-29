var _DATA = [40,18,58,59,58,12,20,88,76,56];

var createBarChart = function(){
    d3.select(".container").append("div").classed("firstChart",true);
    _DATA.shift();
    _DATA.push(_.random(1,100))
     d3.select(".firstChart").selectAll("div")
        .data(_DATA)
        .enter().append("div")
        .style("width",function(d){ return d*4+"px" })
        .style("height","25px")
        .style("margin-bottom","1px")
        .style("margin-top","1px")
        .classed("bar",true); 
    setInterval(updateChart,1000);
        
}

var updateChart = function(){
    _DATA.shift();
    _DATA.push(_.random(1,100))
     var bars = d3.select(".firstChart").selectAll("div")
        .data(_DATA)

        bars.style("width",function(d){ return d*4+"px" })
        .style("height","25px")
        .style("margin-bottom","2px")
        .classed("bar",true); 
}
window.onload = createBarChart;