import ChartBar from './ChartBar';

function Chart({ bars, maxVal }) {
  return (
    <div className="chart">
      {bars.map((bar) => (
        <ChartBar
          key={bar.label}
          label={bar.label}
          value={bar.value}
          maxVal={maxVal}
        />
      ))}
    </div>
  );
}

export default Chart;
