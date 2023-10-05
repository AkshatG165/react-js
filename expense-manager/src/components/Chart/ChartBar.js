import './ChartBar.css';

function ChartBar({ label, value, maxVal }) {
  let barFillHeight = '0%';
  if (value) barFillHeight = `${(value / maxVal) * 100}%`;

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
