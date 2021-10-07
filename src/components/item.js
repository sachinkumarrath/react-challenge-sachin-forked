export default function Item({ data, testId }) {
  return <div data-testid={testId}>{data.key}</div>;
}
