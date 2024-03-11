import React, { useContext } from "react";
import BarGraphContext from "./BarGraphContext";

const Title = ({
  x,
  y,
  centerOf,
  textAnchor,
  fill,
  fontWeight,
  value,
  style,
}) => {
  console.log("Rendering:Title");
  const { width, padding } = useContext(BarGraphContext);
  return (
    <text
      x={
        centerOf === "graph"
          ? width / 2
          : (width - padding.left - padding.right) / 2 + padding.left
      }
      y={30}
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
  centerOf: "Xaxis",
  textAnchor: "middle",
  fill: "black",
  fontWeight: "bold",
  style: {},
};

export default Title;
