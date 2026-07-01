import { render, screen } from '@testing-library/react';
import App from './App';

// the default, minimal CRA smoke test (if you run npm test) - only checks that the 
// app can mount without crashing and that something expected (v) appears on screen
// TODO: update smoke test to check for test Ollama, routing to problem pages, submissions, or the Mocha function suite (provided that Ollama is running, etc.)
test('renders CodeInsight home page', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to CodeInsight/i)).toBeInTheDocument();
});
