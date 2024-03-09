import React from 'react';

const Title = ({ x, y, textAnchor, fill, fontWeight, value, style }) => {
  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      fill={fill}
      fontWeight={fontWeight}
      fontSize={34}
      style={style}
      className="graphnest-title"
    >
      {value}
    </text>
  );
};

Title.defaultProps = {
  textAnchor: "middle",
  fill: "black",
  fontWeight: "bold",
  style: {},
};

export default Title;
