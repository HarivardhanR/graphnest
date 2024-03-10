import React, { useState } from 'react';
import BarGraph from './components/BarGraph';
import Title from './components/Title';
import './components/form.css';

function App() {
  const [data, setData] = useState([
    {"xVal": "Page A", "yVal": 531},
    {"xVal": "Page B", "yVal": 297},
    {"xVal": "Page C", "yVal": 871},
  ]);

  const handleDataChange = (dataType) => {
    if (dataType === "small") {
      setData([
        {"xVal": "Page A", "yVal": 531},
        {"xVal": "Page B", "yVal": 297},
        {"xVal": "Page C", "yVal": 871},
        // Add your small data here
      ]);
    } else if (dataType === "huge") {
      setData([
        {"xVal": "Page A", "yVal": 531},
        {"xVal": "Page B", "yVal": 297},
        {"xVal": "Page C", "yVal": 871},
        {"xVal": "Page D", "yVal": 125},
        {"xVal": "Page E", "yVal": 699},
        {"xVal": "Page F", "yVal": 845},
        {"xVal": "Page G", "yVal": 320},
        {"xVal": "Page H", "yVal": 963},
        {"xVal": "Page I", "yVal": 578},
        {"xVal": "Page J", "yVal": 42},
        {"xVal": "Page K", "yVal": 895},
        {"xVal": "Page L", "yVal": 456},
        {"xVal": "Page M", "yVal": 233},
        {"xVal": "Page N", "yVal": 720},
        {"xVal": "Page O", "yVal": 88},
        {"xVal": "Page P", "yVal": 180},
        {"xVal": "Page Q", "yVal": 509},
        {"xVal": "Page R", "yVal": 975},
        {"xVal": "Page S", "yVal": 680},
        {"xVal": "Page T", "yVal": 365},
        {"xVal": "Page U", "yVal": 701},
        {"xVal": "Page V", "yVal": 434},
        {"xVal": "Page W", "yVal": 256},
        {"xVal": "Page X", "yVal": 782},
        {"xVal": "Page Y", "yVal": 39},
        {"xVal": "Page Z", "yVal": 986},
        {"xVal": "Page A", "yVal": 293},
        {"xVal": "Page B", "yVal": 657},
        {"xVal": "Page C", "yVal": 441},
        {"xVal": "Page D", "yVal": 894},
        {"xVal": "Page E", "yVal": 10},
        {"xVal": "Page F", "yVal": 275},
        {"xVal": "Page G", "yVal": 587},
        {"xVal": "Page H", "yVal": 736},
        {"xVal": "Page I", "yVal": 82},
        {"xVal": "Page J", "yVal": 609},
        {"xVal": "Page K", "yVal": 123},
        {"xVal": "Page L", "yVal": 543},
        {"xVal": "Page M", "yVal": 889},
        {"xVal": "Page N", "yVal": 356},
        {"xVal": "Page O", "yVal": 780},
        {"xVal": "Page P", "yVal": 167},
        {"xVal": "Page Q", "yVal": 990},
        {"xVal": "Page R", "yVal": 47},
        {"xVal": "Page S", "yVal": 748},
  
  
    ]);
    }
  };

  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [xAxisLabel, setXAxisLabel] = useState("X-axis Label");
  const [yAxisLabel, setYAxisLabel] = useState("Y-axis Label");
  const [barSpacing, setBarSpacing] = useState(10);
  const [numYAxisDivisions, setNumYAxisDivisions] = useState(4);
  const [minBarWidth, setMinBarWidth] = useState(5);
  const [xTickLabelAwayPadding, setXTickLabelAwayPadding] = useState(30);
  const [yTickLabelAwayPadding, setYTickLabelAwayPadding] = useState(20);
  const [xAxisLabelAwayPadding, setXAxisLabelAwayPadding] = useState(0);
  const [yAxisLabelAwayPadding, setYAxisLabelAwayPadding] = useState(-20);
  const [xAxisRotateAngle, setXAxisRotateAngle] = useState(0);
  const [titleValue, setTitleValue] = useState("Sample Data");
  const [titleFill, setTitleFill] = useState("black");
  const [titleCenterOf, setTitleCenterOf] = useState("Xaxis");
  const [paddingProp, setPaddingProp] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can perform any additional validation or processing here
  };

  return (
    <div className="app-container">
      <div className="graph-container">
        <BarGraph
          data={data}
          width={width}
          height={height}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          barSpacing={barSpacing}
          numYAxisDivisions={numYAxisDivisions}
          xTickLabelAwayPadding={xTickLabelAwayPadding}
          yTickLabelAwayPadding={yTickLabelAwayPadding}
          xAxisLabelAwayPadding={xAxisLabelAwayPadding}
          yAxisLabelAwayPadding={yAxisLabelAwayPadding}
          minBarWidth={minBarWidth}
          xAxisRotateAngle={xAxisRotateAngle}
          paddingProp={paddingProp}
        >
          <Title value={titleValue} fill={titleFill} style={{}} centerOf={titleCenterOf} />
        </BarGraph>
      </div>
      <div className="form-container">
        <h1>Bar Graph Example</h1>
        <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Data:</label>
          <textarea style={{height:'200px',width:'100%'}}
            value={JSON.stringify(data, null, 2)} // null, 2 for pretty-printing JSON
            onChange={(e) => setData(JSON.parse(e.target.value))}
          />
            <select onChange={(e) => handleDataChange(e.target.value)}>
              <option value="small">Small Data</option>
              <option value="huge">Huge Data</option>
            </select>
        </div>

          <div className="form-group">
            <label>Width:</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Height:</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Padding Top:</label>
            <input
              type="number"
              value={paddingProp.top}
              onChange={(e) => setPaddingProp({ ...paddingProp, top: Number(e.target.value) })}
            />
          </div>
          <div className="form-group">
            <label>Padding Bottom:</label>
            <input
              type="number"
              value={paddingProp.bottom}
              onChange={(e) => setPaddingProp({ ...paddingProp, bottom: Number(e.target.value) })}
            />
          </div>
          <div className="form-group">
            <label>Padding Left:</label>
            <input
              type="number"
              value={paddingProp.left}
              onChange={(e) => setPaddingProp({ ...paddingProp, left: Number(e.target.value) })}
            />
          </div>
          <div className="form-group">
            <label>Padding Right:</label>
            <input
              type="number"
              value={paddingProp.right}
              onChange={(e) => setPaddingProp({ ...paddingProp, right: Number(e.target.value) })}
            />
          </div>

          <div className="form-group">
            <label>X-axis Label:</label>
            <input
              type="text"
              value={xAxisLabel}
              onChange={(e) => setXAxisLabel(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Y-axis Label:</label>
            <input
              type="text"
              value={yAxisLabel}
              onChange={(e) => setYAxisLabel(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Bar Spacing:</label>
            <input
              type="number"
              value={barSpacing}
              onChange={(e) => setBarSpacing(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Number of Y-axis Divisions:</label>
            <input
              type="number"
              value={numYAxisDivisions}
              onChange={(e) => setNumYAxisDivisions(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Minimum Bar Width:</label>
            <input
              type="number"
              value={minBarWidth}
              onChange={(e) => setMinBarWidth(Number(e.target.value))}
            />
          </div>

            <div className="form-group">
              <label>X-Tick Label Away Padding:</label>
              <input
                type="number"
                value={xTickLabelAwayPadding}
                onChange={(e) => setXTickLabelAwayPadding(Number(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>Y-Tick Label Away Padding:</label>
              <input
                type="number"
                value={yTickLabelAwayPadding}
                onChange={(e) => setYTickLabelAwayPadding(Number(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>X-axis Label Away Padding:</label>
              <input
                type="number"
                value={xAxisLabelAwayPadding}
                onChange={(e) => setXAxisLabelAwayPadding(Number(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>Y-axis Label Away Padding:</label>
              <input
                type="number"
                value={yAxisLabelAwayPadding}
                onChange={(e) => setYAxisLabelAwayPadding(Number(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>X-axis Rotate Angle:</label>
              <input
                type="number"
                value={xAxisRotateAngle}
                onChange={(e) => setXAxisRotateAngle(Number(e.target.value))}
              />
            </div>

          <div className="section-title">
            <h2>Title Attributes</h2>
            <div className="form-group">
              <label>Title Value:</label>
              <input
                type="text"
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Title Fill:</label>
              <input
                type="text"
                value={titleFill}
                onChange={(e) => setTitleFill(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Title Center Of:</label>
              <select
                value={titleCenterOf}
                onChange={(e) => setTitleCenterOf(e.target.value)}
              >
                <option value="Xaxis">X-axis</option>
                <option value="graph">Graph</option>
              </select>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
