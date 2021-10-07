export default function Archived({ items, testId }) {
  return (
    <>
      <h2>Archived Transactions</h2>
      <ul data-testid={testId}>
        {items.map((data) => (
          <li key={data.name}>
            <span>{data.name}</span>
            <span>{data.amount}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
