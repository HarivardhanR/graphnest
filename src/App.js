import React, { useState } from 'react';
import BarGraph from './components/BarGraph';
import Title from './components/Title';
import './components/form.css'

function App() {
  const [data, setData] = useState([1, 2, 3]);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [xAxisLabel, setXAxisLabel] = useState("X-axis Label");
  const [yAxisLabel, setYAxisLabel] = useState("Y-axis Label");
  const [barSpacing, setBarSpacing] = useState(10);
  const [numYAxisDivisions, setNumYAxisDivisions] = useState(4);

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
        >
          <Title value="Sample Data" fill="black" style={{}} />
        </BarGraph>
      </div>
      <div className="form-container">
        <h1>Bar Graph Example</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Data:</label>
            <input
              type="text"
              value={data.join(',')}
              onChange={(e) => setData(e.target.value.split(',').map(Number))}
            />
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
        </form>
      </div>
    </div>
  );
}

export default App;
