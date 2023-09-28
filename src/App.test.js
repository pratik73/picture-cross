import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders logo", () => {
    render(<App />);
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders header", () => {
    render(<App />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders paragraph", () => {
    render(<App />);
    const paragraphElement = screen.getByText(/Edit/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders link", () => {
    render(<App />);
    const linkElement = screen.getByRole("link", { name: /learn react/i });
    expect(linkElement).toBeInTheDocument();
  });
});
