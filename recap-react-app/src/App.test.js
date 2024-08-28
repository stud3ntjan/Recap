import { render, screen } from "@testing-library/react";
import App from "./App";

test("Zähler", () => {
  render(<App />);
  const linkElement = screen.getByText(/zähler/i);
  expect(linkElement).toBeInTheDocument();
});
