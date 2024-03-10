import React from "react";

const BarGraph = ({
  data,
  width,
  height,
  xAxisLabel,
  yAxisLabel,
  barSpacing,
  numYAxisDivisions,
  xTickLabelAwayPadding,
  yTickLabelAwayPadding,
  xAxisLabelAwayPadding,
  yAxisLabelAwayPadding,
  xAxisRotateAngle,
  minBarWidth,
  paddingProp={},
  children
}) => {
  // Default padding values
  const defaultPadding = {
    top: 50,
    bottom: 60,
    left: 70,
    right: 10
  };

  // Merge the provided padding object with the default padding object
  const padding = {
    top: defaultPadding.top + (paddingProp.top || 0),
    bottom: defaultPadding.bottom + (paddingProp.bottom || 0),
    left: defaultPadding.left + (paddingProp.left || 0),
    right: defaultPadding.right + (paddingProp.right || 0)
  };

  let svgWidth = width;

  // Adjust width and height to accommodate labels and space
  const adjustedWidth = width - padding.left - padding.right;
  const adjustedHeight = height - padding.top - padding.bottom;
  const max = Math.max(...data.map(item => item.yVal));
  let barWidth = (adjustedWidth - (data.length - 1) * barSpacing) / data.length;
  const maxValue = Math.ceil(max / 1000) * 1000;

  if (barWidth < minBarWidth) {
    svgWidth = width + (minBarWidth- barWidth) * data.length;
    barWidth = minBarWidth;
  }

  const renderBars = () => {


    return data.map((item, index) => {
      const xPos = index * (barWidth + barSpacing) + padding.left;
      const barHeight = (item.yVal / maxValue) * adjustedHeight;
      const yPos = height - barHeight - padding.bottom;

      return (
        <g key={index}>
          <rect
            x={xPos}
            y={yPos}
            width={barWidth}
            height={barHeight}
            fill="blue"
          />
        </g>
      );
    });
  };


  const renderYAxis = () => {

    const yStep = maxValue / numYAxisDivisions;

    const yAxisLabels = Array.from(
      { length: numYAxisDivisions + 1 },
      (_, index) => index * yStep
    );

    const yAxisTicks = yAxisLabels.map((label, index) => (
      <g key={index}>
        <text
          x={padding.left - yTickLabelAwayPadding / 2}
          y={height - padding.bottom - index * (adjustedHeight / numYAxisDivisions)+5}
          textAnchor="end"
          fill="black"
        >
          {label}
        </text>
        <line
          x1={padding.left - 5}
          y1={height - padding.bottom - index * (adjustedHeight / numYAxisDivisions)}
          x2={padding.left}
          y2={height - padding.bottom - index * (adjustedHeight / numYAxisDivisions)}
          stroke="black"
          strokeWidth="1"
        />
      </g>
    ));

    // Adding y-axis line
    return (
      <>
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={padding.left}
          y2={padding.top} // Adjusted for top padding
          stroke="black"
          strokeWidth="1"
        />
        {yAxisTicks}
      </>
    );
  };

  
  const renderXAxis = () => {
    const xAxisTicks = data.map((item, index) => {
      const xPos = index * (barWidth + barSpacing) + padding.left + barWidth / 2;

      return (
        <g key={index}>
          <text
            x={xPos}
            y={height - padding.bottom + xTickLabelAwayPadding}
            textAnchor="middle"
            fill="black"
            transform={`rotate(${xAxisRotateAngle} ${xPos},${height - padding.bottom + xTickLabelAwayPadding})`}
          >
            {item.xVal}
          </text>
          <line
            x1={xPos}
            y1={height - padding.bottom}
            x2={xPos}
            y2={height - padding.bottom + 5}
            stroke="black"
            strokeWidth="1"
          />
        </g>
      );
    });

    // Adding x-axis line
    return (
      <>
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={svgWidth - padding.right}
          y2={height - padding.bottom}
          stroke="black"
          strokeWidth="1"
        />
        {xAxisTicks}
      </>
    );
  };

  
  return (
    <div style={{ overflowX: 'auto', width: '500px',border: '2px solid black'}}>
    <svg width={svgWidth} height={height}>
      {React.Children.map(children, child =>
        React.isValidElement(child) && child.type.name === "Title" ? 
          React.cloneElement(child, {
            x: child.props.centerOf === "graph" ? width / 2 : (width - padding.left - padding.right) / 2 + padding.left ,
            y: 30,
          }) : null
      )}

      {renderBars()}
      <g>
        {renderXAxis()}
        {renderYAxis()}
      </g>
      <text
        x={(width - padding.left - padding.right) / 2 + padding.left}
        y={height+xAxisLabelAwayPadding}
        textAnchor="middle"
        fill="black"
      >
        {xAxisLabel}
      </text>
      <text
        x={-((height - padding.top - padding.bottom ) / 2 + padding.top)}
        y={0-yAxisLabelAwayPadding}
        // x={10}
        // y={((height - padding.top - padding.bottom ) / 2 + padding.top)+5}
        textAnchor="middle"
        transform={`rotate(-90)`}
        fill="black"
      >
        {yAxisLabel}
      </text>
    </svg>
    </div>
  );
};

export default BarGraph;
