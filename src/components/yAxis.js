import React from 'react';

const YAxis = ({maxValue,numYAxisDivisions,yTickLabelAwayPadding,padding,adjustedHeight,height }) => {

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

  YAxis.defaultProps = {
    numYAxisDivisions:5
  };
  
  export default YAxis;