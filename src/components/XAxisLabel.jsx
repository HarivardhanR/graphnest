import React, { useContext } from "react";
import BarGraphContext from "./BarGraphContext";

const XAxisLabel = ({
  x,
  y,
  xAxisLabelAwayPadding,
  fill,
  fontSize,
  fontWeight,
  textAnchor,
  value,
  style,
}) => {
  console.log("Rendering:XAxisLabel");
  const { width, height, padding } = useContext(BarGraphContext);
  return (
    <text
      x={(width - padding.left - padding.right) / 2 + padding.left}
      y={height + xAxisLabelAwayPadding}
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
  fontSize: 16,
  style: {},
};

export default XAxisLabel;
