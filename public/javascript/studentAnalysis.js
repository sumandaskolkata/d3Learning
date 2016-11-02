var studentRecords = [
	{name:'ramesh',subject:'maths',score:87},
	{name:'suresh',subject:'maths',score:45},
	{name:'pokemon',subject:'english',score:65},
	{name:'mary',subject:'kannada',score:44},
	{name:'riya',subject:'science',score:72},
	{name:'katie',subject:'social studies',score:82},
	{name:'katie',subject:'maths',score:98},
	{name:'ramesh',subject:'bengali',score:25},
	{name:'suresh',subject:'science',score:55},
	{name:'riya',subject:'tamil',score:75},
	{name:'pokemon',subject:'sports',score:95},
	{name:'pokemon',subject:'social studies',score:32}
];

var getSubjects = function(){
    var uniqueSubjects = [];
    for(index = 0; index<studentRecords.length;index++)
        if(uniqueSubjects.indexOf(studentRecords[index]['subject'] ) == -1)
            uniqueSubjects.push(studentRecords[index]['subject']);
    return uniqueSubjects;
    
}
var colors = d3.scaleOrdinal(d3.schemeCategory10);
var showSubjects = function(){
    var subjects =getSubjects();

    
    d3.select('body').append('div')
        .classed("subjects",true);
    
    d3.select('.subjects').selectAll('div').data(subjects)
        .enter().append("div")
        .classed("subject",true)
        .text(function(d){return d})
        .style("background-color",function(d){return colors(d)})
        
        
}
var createChart = function(){
    d3.select('.container').append('div')
        .classed("barChart",true);
    d3.select('.barChart').selectAll('div').data(studentRecords)
        .enter().append('div')
        .classed("bar",true)
        .text(function(d){return d.name +" "+ d.score})
        .style("height","25px")
        .style("margin","2px")
        .style("width",function(d){return d.score * 4 +"px"})
        .style("text-align","center")
        .style("background-color",function(d){return colors(d.subject)})
    showSubjects();
}

var sortByType = function(type){
    d3.selectAll('.bar').sort(function(a,b){
        return d3.ascending(a[type], b[type]);
    });
}
var sortByName = function(){
   sortByType('name');
};
var sortByScore = function(){
   sortByType('score');
}
var sortBySubject = function(){
   sortByType('subject');
}

window.onload = createChart;