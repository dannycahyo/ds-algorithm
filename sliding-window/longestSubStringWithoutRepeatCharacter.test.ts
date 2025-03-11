import { describe, it, expect } from "vitest";
import { longestSubStringWithoutRepeatCharacter } from "./longestSubStringWithoutRepeatCharacter";

describe("Longest Substring Without Repeating Characters", () => {
  it("should return the length of the longest substring without repeating characters", () => {
    expect(longestSubStringWithoutRepeatCharacter("abcabcbb")).toBe(
      3,
    );
    expect(longestSubStringWithoutRepeatCharacter("bbbbb")).toBe(1);
    expect(longestSubStringWithoutRepeatCharacter("pwwkew")).toBe(3);
  });

  it("should handle empty strings", () => {
    expect(longestSubStringWithoutRepeatCharacter("")).toBe(0);
  });

  it("should handle single character strings", () => {
    expect(longestSubStringWithoutRepeatCharacter("a")).toBe(1);
    expect(longestSubStringWithoutRepeatCharacter("z")).toBe(1);
  });

  it("should handle strings with all unique characters", () => {
    expect(longestSubStringWithoutRepeatCharacter("abcdef")).toBe(6);
    expect(longestSubStringWithoutRepeatCharacter("xyz")).toBe(3);
  });

  it("should handle strings with repeats at different positions", () => {
    expect(longestSubStringWithoutRepeatCharacter("abba")).toBe(2);
    expect(longestSubStringWithoutRepeatCharacter("dvdf")).toBe(3);
    expect(longestSubStringWithoutRepeatCharacter("anviaj")).toBe(5);
  });

  it("should handle longer complex strings", () => {
    expect(
      longestSubStringWithoutRepeatCharacter(
        "abcdefghijklmnopqrstuvwxyzABCDEFG",
      ),
    ).toBe(33);
    expect(
      longestSubStringWithoutRepeatCharacter(
        "aaabcdeffghijklmnopqrstuvwxyz",
      ),
    ).toBe(21);

    expect(
      longestSubStringWithoutRepeatCharacter(
        "abcdefghijklmnopqrstuvwxyz",
      ),
    ).toBe(26);
  });
});
