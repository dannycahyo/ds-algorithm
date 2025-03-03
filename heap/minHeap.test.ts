import { describe, it, expect } from "vitest";
import { MinHeap } from "./minHeap";

describe("MinHeap", () => {
  it("should initialize and build heap correctly", () => {
    const heap = new MinHeap([
      48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41,
    ]);
    expect(heap.peek()).toBe(-5); // Minimum value should be at the root
  });

  it("should insert elements correctly", () => {
    const heap = new MinHeap([5, 10, 15]);
    heap.insert(2);
    expect(heap.peek()).toBe(2);
  });

  it("should remove the minimum element correctly", () => {
    const heap = new MinHeap([
      48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41,
    ]);
    expect(heap.remove()).toBe(-5);
    expect(heap.peek()).toBe(2);
  });

  it("should maintain heap property after operations", () => {
    const heap = new MinHeap([
      48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41,
    ]);
    heap.remove(); // Remove -5
    heap.insert(-10); // Insert a new minimum
    expect(heap.peek()).toBe(-10);
  });

  it("should report size correctly", () => {
    const heap = new MinHeap([48, 12, 24, 7]);
    expect(heap.size()).toBe(4);
    heap.insert(5);
    expect(heap.size()).toBe(5);
    heap.remove();
    expect(heap.size()).toBe(4);
  });
});
