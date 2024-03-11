import React from "react";
import BarGraphContext from "./BarGraphContext";

const BarGraph = ({
  data,
  width,
  height,
  barSpacing,
  minBarWidth,
  paddingProp = {},
  children,
}) => {
  console.log("Rendering:BarGraph");

  const defaultPadding = {
    top: 50,
    bottom: 60,
    left: 70,
    right: 10,
  };

  // Merge the provided padding object with the default padding object
  const padding = {
    top: defaultPadding.top + (paddingProp.top || 0),
    bottom: defaultPadding.bottom + (paddingProp.bottom || 0),
    left: defaultPadding.left + (paddingProp.left || 0),
    right: defaultPadding.right + (paddingProp.right || 0),
  };

  let svgWidth = width;

  // Adjust width and height to accommodate labels and space
  const adjustedWidth = width - padding.left - padding.right;
  const adjustedHeight = height - padding.top - padding.bottom;
  const max = Math.max(...data.map((item) => item.yVal));
  let barWidth = (adjustedWidth - (data.length - 1) * barSpacing) / data.length;
  const maxValue = Math.ceil(max / 1000) * 1000;

  if (barWidth < minBarWidth) {
    svgWidth = width + (minBarWidth - barWidth) * data.length;
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

  return (
    <BarGraphContext.Provider
      value={{
        svgWidth,
        width,
        height,
        padding,
        data,
        barWidth,
        barSpacing,
        maxValue,
        adjustedWidth,
        adjustedHeight,
      }}
    >
      <div
        style={{
          overflowX: "auto",
          width: `${width}px`,
          border: "2px solid black",
        }}
      >
        <svg width={svgWidth} height={height}>
          {renderBars()}
          {React.Children.map(children, (child) => {
            console.log("children", children);
            if (!React.isValidElement(child)) return null;
            return child;
          })}
        </svg>
      </div>
    </BarGraphContext.Provider>
  );
};

export default BarGraph;
