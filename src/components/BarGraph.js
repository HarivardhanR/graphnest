import React from "react";

const BarGraph = ({
  data,
  width,
  height,
  xAxisLabel,
  yAxisLabel,
  barSpacing,
  numYAxisDivisions,
  children
}) => {
  // Adjust padding for labels and space
  const labelPadding = 20;
  const padding = {
    top: 50,
    bottom: 60,
    left: 70,
    right: 0
  };

  // Adjust width and height to accommodate labels and space
  const adjustedWidth = width - padding.left - padding.right;
  const adjustedHeight = height - padding.top - padding.bottom;

  const renderBars = () => {
    const max = Math.max(...data);
    const barWidth = (adjustedWidth - (data.length - 1) * barSpacing) / data.length;
    const maxValue = Math.ceil(max / 10) * 10;

    return data.map((value, index) => {
      const xPos = index * (barWidth + barSpacing) + padding.left;
      const barHeight = (value / maxValue) * adjustedHeight;
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
    const max = Math.max(...data);
    const maxValue = Math.ceil(max / 10) * 10;
    const yStep = maxValue / numYAxisDivisions;

    const yAxisLabels = Array.from(
      { length: numYAxisDivisions + 1 },
      (_, index) => index * yStep
    );

    const yAxisTicks = yAxisLabels.map((label, index) => (
      <g key={index}>
        <text
          x={padding.left - labelPadding / 2}
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
    const xAxisTicks = data.map((_, index) => {
      const barWidth = (adjustedWidth - (data.length - 1) * barSpacing) / data.length;
      const xPos = index * (barWidth + barSpacing) + padding.left + barWidth / 2;

      return (
        <g key={index}>
          <text
            x={xPos}
            y={height - padding.bottom + labelPadding}
            textAnchor="middle"
            fill="black"
          >
            {index + 1}
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
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="black"
          strokeWidth="1"
        />
        {xAxisTicks}
      </>
    );
  };

  
  return (
    <svg width={width} height={height}>
      {React.Children.map(children, child =>
        React.isValidElement(child) && child.type.name === "Title" ? 
          React.cloneElement(child, {
            x: (width -padding.left -padding.right)/ 2 + padding.left,
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
        y={height-10}
        textAnchor="middle"
        fill="black"
      >
        {xAxisLabel}
      </text>
      <text
        x={-((height - padding.top - padding.bottom ) / 2 + padding.top)}
        y={0+20}
        // x={10}
        // y={((height - padding.top - padding.bottom ) / 2 + padding.top)+5}
        textAnchor="middle"
        transform={`rotate(-90)`}
        fill="black"
      >
        {yAxisLabel}
      </text>
    </svg>
  );
};

export default BarGraph;
