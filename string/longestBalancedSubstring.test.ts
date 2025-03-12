import { describe, it, expect } from "vitest";
import { longestBalancedSubstring } from "./longestBalanceSubString";

describe("Longest Balanced Substring Function", () => {
  it("should return 0 for empty string", () => {
    expect(longestBalancedSubstring("")).toBe(0);
  });

  it("should return 0 for unmatched parentheses", () => {
    expect(longestBalancedSubstring("(")).toBe(0);
    expect(longestBalancedSubstring(")")).toBe(0);
    expect(longestBalancedSubstring(")))")).toBe(0);
    expect(longestBalancedSubstring("(((")).toBe(0);
  });

  it("should handle simple balanced cases", () => {
    expect(longestBalancedSubstring("()")).toBe(2);
    expect(longestBalancedSubstring("(())")).toBe(4);
    expect(longestBalancedSubstring("()()")).toBe(4);
  });

  it("should find longest balanced substring in mixed cases", () => {
    expect(longestBalancedSubstring("(()))(")).toBe(4);
    expect(longestBalancedSubstring("())()(()())")).toBe(8);
    expect(longestBalancedSubstring("(()")).toBe(2);
    expect(longestBalancedSubstring(")(()")).toBe(2);
    expect(longestBalancedSubstring(")(")).toBe(0);
  });

  it("should handle complex nested patterns", () => {
    expect(longestBalancedSubstring("((()))")).toBe(6);
    expect(longestBalancedSubstring("((()))(())")).toBe(10);
    expect(longestBalancedSubstring("((())()")).toBe(6);
  });

  it("should handle alternating patterns", () => {
    expect(longestBalancedSubstring("()()()()")).toBe(8);
    expect(longestBalancedSubstring("()()())")).toBe(6);
    expect(longestBalancedSubstring("()()(()")).toBe(4);
  });

  it("should handle edge cases with balanced substrings separated by unbalanced parts", () => {
    expect(longestBalancedSubstring("()(())()(()()")).toBe(8);
    expect(longestBalancedSubstring("))((()())((")).toBe(6);
    expect(longestBalancedSubstring(")(())(()()))(()")).toBe(10);
  });
});
