import React from "react";

const BarGraph = ({
  data,
  width,
  height,
  barSpacing,
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
  
  return (
    <div style={{ overflowX: 'auto', width: `${width}px`, border: '2px solid black' }}>
      <svg width={svgWidth} height={height}>
        {React.Children.map(children, child => {
          if (!React.isValidElement(child)) return null;
          switch (child.type.name) {
            case "Title":
              return React.cloneElement(child, {
                x: child.props.centerOf === "graph" ? width / 2 : (width - padding.left - padding.right) / 2 + padding.left,
                y: 30,
              });
            case "XAxis":
              return React.cloneElement(child, {
                data: data,
                barWidth: barWidth,
                barSpacing: barSpacing,
                padding: padding,
                svgWidth: svgWidth,
                height: height
              });
            case "YAxis":
              return React.cloneElement(child, {
                maxValue: maxValue,
                padding: padding,
                adjustedHeight: adjustedHeight,
                height: height
              });
            case "XAxisLabel":
              return React.cloneElement(child, {
                x: (width - padding.left - padding.right) / 2 + padding.left,
                y: height,
              });
            case "YAxisLabel":
              return React.cloneElement(child, {
                x: -((height - padding.top - padding.bottom) / 2 + padding.top),
                y: 0,
              });
            default:
              return null;
          }
        })}
        {renderBars()}
      </svg>
    </div>
  );
  
};

export default BarGraph;
