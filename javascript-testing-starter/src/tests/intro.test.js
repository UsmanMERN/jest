import { describe, test, it, expect } from "vitest";
import { factorial, fizzBuzz, max } from "../intro";

describe("max", () => {
  it("should return the first argument if it greater", () => {
    // AAA
    // Arrange: Turn on the TV
    // const a = 20;
    // const b = 2;
    // Act: press the power button
    // const result = max(a, b);

    // Asserts: verify tv is off
    expect(max(21, 2)).toBe(21);
  });
  it("should return the second argument if it greater", () => {
    expect(max(1, 21)).toBe(21);
  });
  it("should return the first argument if it both are equal", () => {
    expect(max(1, 21)).toBe(21);
  });
});

describe("fizzBuzz", () => {
  it("if devisible by 3 and 5 should return 'FizzBuzz'", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("if devisible by 3 only should return 'Fizz'", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  it("if devisible by 3 only should return 'Fizz'", () => {
    expect(fizzBuzz(12)).toBe("Fizz");
  });
  it("if devisible by 5 only should return 'Buzz'", () => {
    expect(fizzBuzz(25)).toBe("Buzz");
  });
  it("if devisible by 5 only should return 'Buzz'", () => {
    expect(fizzBuzz(13)).toBe("13");
  });
});

describe("factorial", () => {
  it("it should return 0 if argument is 0", () => {
    expect(factorial(0)).toBe(1);
  });
  it("it should return 0 if argument is 1", () => {
    expect(factorial(1)).toBe(1);
  });
  it("it should return 6 if argument is 3", () => {
    expect(factorial(3)).toBe(6);
  });
  it("it should return 24 if argument is 4", () => {
    expect(factorial(4)).toBe(24);
  });
  it("it should return undefined if argument is a negative number", () => {
    expect(factorial(-1)).toBe(undefined);
  });
});
