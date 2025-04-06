import { describe, it, expect } from "vitest";
import { mergingLinkedLists } from "./mergingLinkedList";
import {
  createLinkedList,
  linkedListToArray,
} from "./linkedListUtils";

describe("Merging Linked Lists Function", () => {
  it("should find the intersection of two linked lists", () => {
    // Create shared section: 1 -> 4
    const sharedSection = createLinkedList([1, 4]);

    // Create first list: 2 -> 3 -> [shared section]
    const list1 = createLinkedList([2, 3])!;
    let tail1 = list1;
    while (tail1.next !== null) {
      tail1 = tail1.next;
    }
    tail1.next = sharedSection;

    // Create second list: 8 -> 7 -> [shared section]
    const list2 = createLinkedList([8, 7])!;
    let tail2 = list2;
    while (tail2.next !== null) {
      tail2 = tail2.next;
    }
    tail2.next = sharedSection;

    const intersection = mergingLinkedLists(list1, list2);

    expect(intersection).toBe(sharedSection);
    expect(linkedListToArray(intersection)).toEqual([1, 4]);
  });

  it("should return null when there is no intersection", () => {
    const list1 = createLinkedList([1, 2, 3, 4]);
    const list2 = createLinkedList([5, 6, 7]);

    const intersection = mergingLinkedLists(list1!, list2!);

    expect(intersection).toBeNull();
  });

  it("should handle case where the intersection is at the beginning of both lists", () => {
    const sharedList = createLinkedList([1, 2, 3]);

    const intersection = mergingLinkedLists(sharedList!, sharedList!);

    expect(intersection).toBe(sharedList);
    expect(linkedListToArray(intersection)).toEqual([1, 2, 3]);
  });

  it("should handle case where one list is entirely contained within the other", () => {
    // Create list: 1 -> 2 -> 3 -> 4
    const list1 = createLinkedList([1, 2, 3, 4])!;

    // Find the node with value 3
    let nodeWithValue3 = list1;
    while (nodeWithValue3.value !== 3) {
      nodeWithValue3 = nodeWithValue3.next!;
    }

    const intersection = mergingLinkedLists(list1, nodeWithValue3);

    expect(intersection).toBe(nodeWithValue3);
    expect(linkedListToArray(intersection)).toEqual([3, 4]);
  });

  it("should handle case where lists have different lengths before intersection", () => {
    // Create shared section: 5 -> 6
    const sharedSection = createLinkedList([5, 6]);

    // Create first list: 1 -> 2 -> 3 -> 4 -> [shared section]
    const list1 = createLinkedList([1, 2, 3, 4])!;
    let tail1 = list1;
    while (tail1.next !== null) {
      tail1 = tail1.next;
    }
    tail1.next = sharedSection;

    // Create second list: 9 -> [shared section]
    const list2 = createLinkedList([9])!;
    list2.next = sharedSection;

    const intersection = mergingLinkedLists(list1, list2);

    expect(intersection).toBe(sharedSection);
    expect(linkedListToArray(intersection)).toEqual([5, 6]);
  });

  it("should handle case where intersection is at the end of both lists", () => {
    // Create shared node: 7
    const sharedNode = createLinkedList([7]);

    // Create first list: 1 -> 2 -> 3 -> [shared node]
    const list1 = createLinkedList([1, 2, 3])!;
    let tail1 = list1;
    while (tail1.next !== null) {
      tail1 = tail1.next;
    }
    tail1.next = sharedNode;

    // Create second list: 4 -> 5 -> 6 -> [shared node]
    const list2 = createLinkedList([4, 5, 6])!;
    let tail2 = list2;
    while (tail2.next !== null) {
      tail2 = tail2.next;
    }
    tail2.next = sharedNode;

    const intersection = mergingLinkedLists(list1, list2);

    expect(intersection).toBe(sharedNode);
    expect(linkedListToArray(intersection)).toEqual([7]);
  });
});
