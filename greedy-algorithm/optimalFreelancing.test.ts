import { describe, it, expect } from "vitest";
import { findOptimalFreelancing } from "./optimalFreelancing";

describe("Optimal Freelancing Function", () => {
  it("should return 0 for an empty job list", () => {
    expect(findOptimalFreelancing([])).toEqual(0);
  });

  it("should handle the sample input correctly", () => {
    const jobs = [
      { deadline: 1, payment: 1 },
      { deadline: 2, payment: 1 },
      { deadline: 2, payment: 2 },
    ];
    expect(findOptimalFreelancing(jobs)).toEqual(3);
  });

  it("should prioritize high payment jobs", () => {
    const jobs = [
      { deadline: 1, payment: 1 },
      { deadline: 1, payment: 3 },
      { deadline: 1, payment: 2 },
    ];
    expect(findOptimalFreelancing(jobs)).toEqual(3);
  });

  it("should handle jobs with different deadlines", () => {
    const jobs = [
      { deadline: 1, payment: 5 },
      { deadline: 3, payment: 4 },
      { deadline: 5, payment: 3 },
      { deadline: 7, payment: 2 },
    ];
    expect(findOptimalFreelancing(jobs)).toEqual(14);
  });

  it("should handle jobs with deadlines beyond the 7-day limit", () => {
    const jobs = [
      { deadline: 8, payment: 10 },
      { deadline: 9, payment: 15 },
      { deadline: 10, payment: 20 },
    ];
    expect(findOptimalFreelancing(jobs)).toEqual(45); // All can be completed within 7 days
  });

  it("should handle conflicting deadlines and maximize profit", () => {
    const jobs = [
      { deadline: 2, payment: 5 },
      { deadline: 2, payment: 7 },
      { deadline: 2, payment: 3 },
      { deadline: 3, payment: 8 },
      { deadline: 3, payment: 4 },
    ];
    expect(findOptimalFreelancing(jobs)).toEqual(20); // Should pick jobs with payment 8, 7, and 5
  });

  it("should handle a single job correctly", () => {
    expect(
      findOptimalFreelancing([{ deadline: 3, payment: 10 }]),
    ).toEqual(10);
  });

  it("should handle a complex case with multiple jobs and deadlines", () => {
    const jobs = [
      { deadline: 1, payment: 5 },
      { deadline: 2, payment: 3 },
      { deadline: 3, payment: 9 },
      { deadline: 4, payment: 4 },
      { deadline: 4, payment: 8 },
      { deadline: 5, payment: 6 },
      { deadline: 6, payment: 2 },
      { deadline: 7, payment: 7 },
      { deadline: 7, payment: 10 },
    ];
    expect(findOptimalFreelancing(jobs)).toEqual(49); // Should pick optimal jobs for all 7 days
  });
});
