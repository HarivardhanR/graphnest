import React, { useContext } from "react";
import BarGraphContext from "./BarGraphContext";

const YAxisLabel = ({
  x,
  y,
  yAxisLabelAwayPadding,
  fill,
  fontSize,
  fontWeight,
  textAnchor,
  value,
  style,
}) => {
  console.log("Rendering:YAxisLabel");
  const { padding, height } = useContext(BarGraphContext);
  return (
    <text
      x={-((height - padding.top - padding.bottom) / 2 + padding.top)}
      y={0 - yAxisLabelAwayPadding}
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
  fontSize: 16,
  style: {},
};

export default YAxisLabel;
