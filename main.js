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


  // function that creates color for the bars
  const barColor = function (data,options) {
    let division = options.chartWidth / data.length;
    let maxValue = Math.max(...data);
    // loop over each value of data and and set color height, width, left and top positions
    // appending to class = .h_line
    for (let i =0; i < data.length; i++) {
      let barColor = $('<div>').addClass('barColor');
      barColor.css('width', division - options.barSpacing);
      barColor.css('height', (data[i]/maxValue) * options.chartHeight + 'px');
      barColor.css('left', (i * division) + 2);
      barColor.css('top', -((data[i]/maxValue)*options.chartHeight) + 'px' )
      barColor.css('background', options.barColor);

      $('.h_line').append(barColor);
    }
  }


  // function that inserts the values into the bar at user specified point
  const insertValues = function (data,options) {
    let maxValue = Math.max(...data);
    let division = options.chartWidth / data.length;

    if (options.valuePosition === 'top') {
      for (let i = 0; i < data.length; i++) {
        let displayValue = $('<p>').addClass('values');
        displayValue.text(data[i]);
        displayValue.css('left', ($('.barColor').width() / 2) + i * division);
        displayValue.css('top', -((data[i]/maxValue) * options.chartHeight));
        $('.h_line').append(displayValue);
      }
    }else if (options.valuePosition === 'centre') {
      for (let i = 0; i < data.length; i++) {
        let displayValue = $('<p>').addClass('values');
        displayValue.text(data[i]);
        displayValue.css('left', ($('.barColor').width() / 2) + i * division);
        displayValue.css('top', -((data[i] / maxValue)* options.chartHeight) * 0.6  - 15);
        $('.h_line').append(displayValue);
      }
    }else if (options.valuePosition === 'bottom') {
      for (let i = 0; i < data.length; i++) {
        let displayValue = $('<p>').addClass('values');
        displayValue.text(data[i]);
        displayValue.css('left', ($('.barColor').width() / 2) + i * division);
        displayValue.css('top', -60);
        $('.h_line').append(displayValue);
      }
    }
  }


  // function that calls all other functions and creates the bar chart
  // appends all features to the user defined html element by appending a div to it
  const drawBarChart = function (data, options, element) {
    // creates title
    let title = $('<p>').addClass('title');
    title.text(options.title);

    // centres title
    title.css('left', (options.chartWidth/2) - 15);
    title.css('color', options.titleColor);
    title.css('font-size', options.titleSize);

    // creates gap between title and chart
    let blank = $('<div>').addClass('blank');
    blank.css('height', 40);
    title.append(blank);
    $(element).append(title);

    // rendering chart into user defined element
    const chartBody = $('<div>').addClass('chart_body');
    $(element).append(chartBody);

    createAxis(options, '.chart_body');

    barColor(data,options);

    insertValues(data,options);
  }



  // Test Code:
  let element = '#reference';
  let data = [4,3,2,7,8,2,5];
  let options = {chartWidth:500, chartHeight:500, tickCount: 5, valuePosition: 'top', barColor: 'orange', barSpacing: 4, title: 'My Bar Chart!', titleColor: 'green', titleSize: '20'};

  drawBarChart(data,options,element);

});
