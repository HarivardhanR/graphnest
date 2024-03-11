import React, { useContext } from "react";
import BarGraphContext from "./BarGraphContext";

const XAxis = ({ fontSize, xTickLabelAwayPadding, xAxisRotateAngle }) => {
  console.log("Rendering:XAxis");
  const { data, barWidth, barSpacing, padding, svgWidth, height } =
    useContext(BarGraphContext);
  let renderedTexts = [];

  const xAxisTicks = data.map((item, index) => {
    const xPos = index * (barWidth + barSpacing) + padding.left + barWidth / 2;
    const textWidth = item.xVal.length * fontSize * 0.6;
    let renderText = true;

    // Check for overlap with previously rendered texts
    for (let i = 0; i < renderedTexts.length; i++) {
      if (
        xPos - textWidth / 2 < renderedTexts[i].x + renderedTexts[i].width &&
        xPos + textWidth / 2 > renderedTexts[i].x
      ) {
        renderText = false;
        break;
      }
    }

    if (renderText) {
      const textObj = {
        x: xPos - textWidth / 2,
        width: textWidth,
      };
      renderedTexts.push(textObj);

      return (
        <g key={index}>
          <text
            x={xPos}
            y={height - padding.bottom + xTickLabelAwayPadding}
            fontSize={fontSize}
            textAnchor="middle"
            fill="black"
            transform={`rotate(${xAxisRotateAngle} ${xPos},${
              height - padding.bottom + xTickLabelAwayPadding
            })`}
          >
            {item.xVal}
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
    } else {
      return null; // Skip rendering the text
    }
  });

  // Adding x-axis line
  return (
    <>
      <line
        x1={padding.left}
        y1={height - padding.bottom}
        x2={svgWidth - padding.right}
        y2={height - padding.bottom}
        stroke="black"
        strokeWidth="1"
      />
      {xAxisTicks}
    </>
  );
};

XAxis.defaultProps = {
  fontSize: 16,
  style: {},
};

export default XAxis;
