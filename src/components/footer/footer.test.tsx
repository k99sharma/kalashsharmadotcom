import { render, screen } from "@testing-library/react";
import Footer from "../footer";

describe("Footer", () => {
  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01"));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  test("renders footer with year and text", () => {
    render(<Footer />);

    expect(screen.getByText(/Kalash Sharma/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2026/)).toBeInTheDocument();
  });
});
