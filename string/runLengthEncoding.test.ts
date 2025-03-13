import { describe, it, expect } from "vitest";
import { runLengthEncoding } from "./runLengthEncoding";

describe("Run-Length Encoding Function", () => {
  it("should encode simple strings with repeating characters", () => {
    expect(runLengthEncoding("AAA")).toEqual("3A");
    expect(runLengthEncoding("AABB")).toEqual("2A2B");
    expect(runLengthEncoding("ABC")).toEqual("1A1B1C");
  });

  it("should handle runs longer than 9 characters by splitting them", () => {
    expect(runLengthEncoding("AAAAAAAAAAA")).toEqual("9A2A");
    expect(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")).toEqual(
      "9A4A2B4C2D",
    );
  });

  it("should handle special characters", () => {
    expect(runLengthEncoding("!!!???")).toEqual("3!3?");
    expect(runLengthEncoding("a  b")).toEqual("1a2 1b");
  });

  it("should handle mixed character types", () => {
    expect(runLengthEncoding("aa1122!!")).toEqual("2a21222!");
    expect(runLengthEncoding("AAbbCC123!")).toEqual("2A2b2C1112131!");
  });

  it("should handle single character strings", () => {
    expect(runLengthEncoding("A")).toEqual("1A");
    expect(runLengthEncoding("1")).toEqual("1");
  });

  it("should handle empty strings", () => {
    expect(runLengthEncoding("")).toEqual("");
  });

  it("should handle alternate characters", () => {
    expect(runLengthEncoding("ABABAB")).toEqual("1A1B1A1B1A1B");
  });
});
