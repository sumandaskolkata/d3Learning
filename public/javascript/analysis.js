var _DATA = [40,18,58,59,58,12,20,88,76,56];

var createBarChart = function(){
    console.log(_DATA)
    d3.select(".container").append("div").classed("firstChart",true);

     d3.select(".firstChart").selectAll("div")
        .data(_DATA)
        .enter().append("div")
        .style("width",function(d){ return d*4+"px" })
        .style("height","25px")
        .style("margin-bottom","2px")
        .classed("bar",true);   
}

window.onload = createBarChart;