import React from 'react';

const YAxisLabel = ({ x, y,yAxisLabelAwayPadding, fill,fontSize, fontWeight,textAnchor, value, style }) => {
  return (
    <text
      x={x}
      y={y-yAxisLabelAwayPadding}
      fill={fill}
      fontWeight={fontWeight}
      fontSize={fontSize}
      style={style}
      textAnchor={textAnchor}
      transform={`rotate(-90)`}
      className="graphnest-y-axis"
    >
      {value}
    </text>
  );
};

YAxisLabel.defaultProps = {
  textAnchor: "middle",
  fill: "black",
  fontWeight: "bold",
  fontSize:16,
  style: {},
};

export default YAxisLabel;