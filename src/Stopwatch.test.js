import { render, screen, fireEvent } from "@testing-library/react";
import Stopwatch from "./Stopwatch";

describe("Stopwatch button displays", () => {
  beforeEach(() => {
    render(<Stopwatch />);
  });

  it("should only show 00:00:00:00 and a start button upon first render", () => {
    expect(screen.getByText(/00:00:00:00/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /start/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /pause/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /lap/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /reset/i })).toBeNull();
  });

  it("should change buttons when the user clicks start", () => {
    fireEvent.click(screen.getByRole("button", { name: /start/i }));
    expect(screen.queryByRole("button", { name: /start/i })).toBeNull();
    expect(screen.getByRole("button", { name: /pause/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /lap/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
  });

  it("should change pause to start when the user clicks pause", () => {
    fireEvent.click(screen.getByRole("button", { name: /start/i }));
    fireEvent.click(screen.getByRole("button", { name: /pause/i }));
    expect(screen.getByRole("button", { name: /start/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /pause/i })).toBeNull();
  });

  it("should only show start button when the user click reset", () => {
    fireEvent.click(screen.getByRole("button", { name: /start/i }));
    fireEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(screen.getByRole("button", { name: /start/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /pause/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /lap/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /reset/i })).toBeNull();
  });
});

describe("Timer controls", () => {
  beforeEach(() => {
    render(<Stopwatch />);
  });

  it("should call requestAnimationFrame when the user clicks start", () => {
    jest.spyOn(window, "requestAnimationFrame").mockImplementation(() => {});
    fireEvent.click(screen.getByRole("button", { name: /start/i }));
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    window.requestAnimationFrame.mockRestore();
  });

  it("should call cancelAnimationFrame when the user clicks pause", () => {
    jest.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
    fireEvent.click(screen.getByRole("button", { name: /start/i }));
    fireEvent.click(screen.getByRole("button", { name: /pause/i }));
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    window.cancelAnimationFrame.mockRestore();
  });

  it("should call cancelAnimationFrame when the user clicks reset", () => {
    jest.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
    fireEvent.click(screen.getByRole("button", { name: /start/i }));
    fireEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    window.cancelAnimationFrame.mockRestore();
  });
});

describe("Lap", () => {
  beforeEach(() => {
    render(<Stopwatch />);
  });

  it("should record laptime when the user clicks lap", () => {
    fireEvent.click(screen.getByRole("button", { name: /start/i }));
    fireEvent.click(screen.getByRole("button", { name: /lap/i }));
    expect(screen.getByRole("cell", { name: /#1/ })).toBeInTheDocument();
    expect(screen.getAllByRole("cell", { name: /00:00:00:00/ })).toHaveLength(
      2
    );
  });

  it("should clear lap table when the user clicks clear", () => {
    fireEvent.click(screen.getByRole("button", { name: /start/i }));
    fireEvent.click(screen.getByRole("button", { name: /lap/i }));
    fireEvent.click(screen.getByRole("button", { name: /clear/i }));
    expect(screen.queryByRole("table")).toBeNull();
  });
});
