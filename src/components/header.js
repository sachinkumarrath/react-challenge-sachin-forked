export default function Header({ testId, text }) {
  return <header data-testid={testId}>{text}</header>;
}
