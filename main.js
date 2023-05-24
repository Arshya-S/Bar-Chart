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

    // create ticks on the y-axis
    let interval = options.chartHeight / options.tickCount;
    for (let i = 0; i < options.tickCount; i++) {
      let tick = $('<div>').addClass('tick').css('top', i * interval + 'px').css('left', '-7.5px');
      $(vLine).append(tick);
    }
  }

  // function that creates the bars
  const createBars = function (data,element,options) {

    for (let value of data) {
      let leftVertical = $('<div>').addClass('bar');
      leftVertical.css('height', maxValue)

    }



  }





  const drawBarChart = function (data, options, element) {
    // rendering chart into user defined element
    const chartBody = $('<div>').addClass('chart_body');
    $(element).append(chartBody);

    createAxis(options, '.chart_body');
  }





  // Test Code:
  let element = '#reference';
  let data = [2,4,5,6,9];
  let options = {chartWidth:500, chartHeight:500, tickCount: 5};

  drawBarChart(data,options,element);

});




