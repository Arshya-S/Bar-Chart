$(document).ready(function(){

  // function that creates the axis of the chart
  const createAxis = function (options,element) {

    // create div for vertical line and set height
    const vLine = $('<div>').addClass('v_line')
    vLine.css('height', options.chartHeight);
    $(element).append(vLine);

    // create div for horizontal line and set width
    const hLine = $('<div>').addClass('h_line');
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
  const createBars = function (data,options) {
    // finds the max value of the data
    let maxValue = Math.max(...data);
    // partitions x-axis to create evenly spread out bars
    let division = options.chartWidth / data.length;

    // loop to add the left and right vertical lines of the bars
    // height of bar is determined by bar chart height
    // position is determined by the partitioning done by 'division'
    for (let i = 0; i < data.length; i++) {
      let leftVertical = $('<div>').addClass('bar');
      leftVertical.css('height', (data[i]/maxValue)*options.chartHeight + 'px');
      leftVertical.css('left', (i * division));

      let rightVertical = $('<div>').addClass('bar');
      rightVertical.css('height', (data[i]/maxValue)*options.chartHeight + 'px');
      rightVertical.css('left', (i * division) + division);

      let barTop = $('<div>').addClass('bar-top');
      barTop.css('width',division);
      barTop.css('top', -((data[i]/maxValue)*options.chartHeight) + 'px');
      barTop.css('left', (i * division));

      // appending elements to class: h_line
      $('.h_line').append(barTop);
      $('.h_line').append(leftVertical)
      $('.h_line').append(rightVertical)
    }
  }
  // function that inserts the values into th bar at user specified point
  const insertValues = function (data,options) {

  }




  const drawBarChart = function (data, options, element) {
    // rendering chart into user defined element
    const chartBody = $('<div>').addClass('chart_body');
    $(element).append(chartBody);

    createAxis(options, '.chart_body');

    createBars(data,options);
  }





  // Test Code:
  let element = '#reference';
  let data = [6,4,5,6,9,5,4,2];
  let options = {chartWidth:500, chartHeight:500, tickCount: 5, valuePosition: top};

  drawBarChart(data,options,element);

});




