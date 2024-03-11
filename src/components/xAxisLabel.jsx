import React from 'react';

const XAxisLabel = ({ x, y,xAxisLabelAwayPadding,fill,fontSize, fontWeight,textAnchor, value, style }) => {
  return (
    <text
      x={x}
      y={y+xAxisLabelAwayPadding}
      fill={fill}
      fontWeight={fontWeight}
      fontSize={fontSize}
      style={style}
      textAnchor={textAnchor}
      className="graphnest-x-axis"
    >
      {value}
    </text>
  );
};

XAxisLabel.defaultProps = {
  textAnchor: "middle",
  fill: "black",
  fontWeight: "bold",
  fontSize:16,
  style: {},
};

export default XAxisLabel;