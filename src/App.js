import React from 'react';
import BarGraph from './components/BarGraph';
import Title from './components/Title';

function App() {
  // Sample data
  // const data = [93, 40, 60, 80, 10,20,30,30,40,43,3,2,32,20,32,32,32,32];
  // const data = [4000,19001, 4000,40];
  const data = [1,2,3];
  const width = 500;
  const height = 500;
  const xAxisLabel = "X-axis Label";
  const yAxisLabel = "Y-axis Label";
  const barSpacing = 10;
  const numYAxisDivisions = 4;

  return (
    <div className="App">
      <h1>Bar Graph Example</h1>
      <BarGraph
        data={data}
        width={width}
        height={height}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
        barSpacing={barSpacing}
        numYAxisDivisions={numYAxisDivisions}
      >
        <Title value="Sample Data" fill="black" style={{}}/>
      </BarGraph>
    </div>
  );
}

export default App;
