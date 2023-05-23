$(document).ready(function(){

  // function that creates the axis of the chart
  const createAxis = function (options,element) {

    // create div for vertical line and set height
    const vLine = $('<div>').addClass('v_line')
    vLine.css('height', options.chartHeight);
    $(element).append(vLine);

    // create div for horizontal line and set width
    const hLine = $('<div>').addClass('h_line')
    hLine.css('width', options.chartWidth);
    $(element).append(hLine);
  }

// function that creates the bars
const createBars = function () {
  return;
}





  const drawBarChart = function (data, options, element) {
    // rendering chart into user defined element
    const chartBody = $('<div>').addClass('chart_body');
    $(element).append(chartBody);

    createAxis(options, '.chart_body');
  }





  // Test Code:
  let element = '#reference';
  let data = [1,2,3,4,5];
  let options = {chartWidth:200, chartHeight:200};

  drawBarChart(data,options,element);

});




