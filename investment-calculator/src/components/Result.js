import styles from './Result.module.css';
import ResultRow from './ResultRow';

function Result({ data }) {
  let results = <p></p>;

  if (data.length > 0) {
    results = (
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((yearwiseData) => (
            <ResultRow key={yearwiseData.year} yearwiseData={yearwiseData} />
          ))}
        </tbody>
      </table>
    );
  }

  return results;
}

export default Result;
