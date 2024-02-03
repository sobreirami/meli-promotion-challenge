function ReactMarkDown(props: { children: React.ReactNode }) {
  return props.children;
}

jest.mock('react-markdown', () => ReactMarkDown);
