import { describe, it, expect } from "vitest";
import { SuffixTrie } from "./suffixTrie";

describe("SuffixTrie Class", () => {
  it("should correctly identify suffixes of the original string", () => {
    const trie = new SuffixTrie("babc");

    // All valid suffixes
    expect(trie.contains("babc")).toBe(true);
    expect(trie.contains("abc")).toBe(true);
    expect(trie.contains("bc")).toBe(true);
    expect(trie.contains("c")).toBe(true);

    // Non-suffixes
    expect(trie.contains("ba")).toBe(false);
    expect(trie.contains("ab")).toBe(false);
    expect(trie.contains("d")).toBe(false);
  });

  it("should handle empty strings", () => {
    const emptyTrie = new SuffixTrie("");
    expect(emptyTrie.contains("")).toBe(false);
  });

  it("should handle single character strings", () => {
    const trie = new SuffixTrie("a");
    expect(trie.contains("a")).toBe(true);
    expect(trie.contains("b")).toBe(false);
  });

  it("should be case-sensitive", () => {
    const trie = new SuffixTrie("Hello");
    expect(trie.contains("Hello")).toBe(true);
    expect(trie.contains("hello")).toBe(false);
    expect(trie.contains("ello")).toBe(true);
    expect(trie.contains("Ello")).toBe(false);
  });

  it("should handle strings with repeating patterns", () => {
    const trie = new SuffixTrie("banana");

    expect(trie.contains("banana")).toBe(true);
    expect(trie.contains("anana")).toBe(true);
    expect(trie.contains("nana")).toBe(true);
    expect(trie.contains("ana")).toBe(true);
    expect(trie.contains("na")).toBe(true);
    expect(trie.contains("a")).toBe(true);

    // "ana" appears twice, but that doesn't affect the result
    expect(trie.contains("an")).toBe(false);
    expect(trie.contains("ba")).toBe(false);
  });

  it("should correctly identify partial matches", () => {
    const trie = new SuffixTrie("testing");

    expect(trie.contains("test")).toBe(false); // "test" is not a suffix
    expect(trie.contains("ing")).toBe(true); // "ing" is a suffix
    expect(trie.contains("ting")).toBe(true); // "ting" is a suffix
    expect(trie.contains("est")).toBe(false); // "est" is not a suffix
  });

  it("should work with special characters", () => {
    const trie = new SuffixTrie("a!@#$");

    expect(trie.contains("a!@#$")).toBe(true);
    expect(trie.contains("!@#$")).toBe(true);
    expect(trie.contains("@#$")).toBe(true);
    expect(trie.contains("#$")).toBe(true);
    expect(trie.contains("$")).toBe(true);

    expect(trie.contains("a!")).toBe(false);
    expect(trie.contains("a@")).toBe(false);
  });
});
