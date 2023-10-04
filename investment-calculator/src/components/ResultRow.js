function ResultRow({ yearwiseData }) {
  return (
    <tr>
      <td>{yearwiseData.year}</td>
      <td>${yearwiseData.totalSaving}</td>
      <td>${yearwiseData.yearlyInterest}</td>
      <td>${yearwiseData.totalInterest}</td>
      <td>${yearwiseData.investedCapital}</td>
    </tr>
  );
}

export default ResultRow;
