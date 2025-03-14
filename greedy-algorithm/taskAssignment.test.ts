import { describe, it, expect } from "vitest";
import { taskAssignment } from "./taskAssignment";

describe("Task Assignment Function", () => {
  it("should assign tasks optimally for the example case", () => {
    const k = 3;
    const tasks = [1, 3, 5, 3, 1, 4];
    const result = taskAssignment(k, tasks);

    // Check that we have exactly k task pairs
    expect(result.length).toBe(k);

    // Check that each pair contains valid task indices
    for (const pair of result) {
      expect(pair.length).toBe(2);
      expect(pair[0]).toBeGreaterThanOrEqual(0);
      expect(pair[0]).toBeLessThan(tasks.length);
      expect(pair[1]).toBeGreaterThanOrEqual(0);
      expect(pair[1]).toBeLessThan(tasks.length);
      expect(pair[0]).not.toBe(pair[1]); // Tasks must be unique
    }

    // Collect all task indices to ensure each task is assigned exactly once
    const allAssignedIndices = result.flat();
    expect(new Set(allAssignedIndices).size).toBe(tasks.length);

    // Check the optimal assignment time (maximum sum of any pair)
    const pairSums = result.map(([i, j]) => tasks[i] + tasks[j]);
    const maxTime = Math.max(...pairSums);
    expect(maxTime).toBeLessThanOrEqual(6); // Optimal time for the example is 6
  });

  it("should handle a single worker case", () => {
    const k = 1;
    const tasks = [3, 5];
    const result = taskAssignment(k, tasks);

    expect(result.length).toBe(1);
    expect(result[0].length).toBe(2);

    // Check that the assigned tasks are valid
    const [i, j] = result[0];
    expect(i).toBeGreaterThanOrEqual(0);
    expect(i).toBeLessThan(tasks.length);
    expect(j).toBeGreaterThanOrEqual(0);
    expect(j).toBeLessThan(tasks.length);
    expect(i).not.toBe(j);
  });

  it("should handle multiple workers with varied task durations", () => {
    const k = 4;
    const tasks = [1, 7, 3, 4, 6, 2, 5, 8];
    const result = taskAssignment(k, tasks);

    // Check that we have exactly k task pairs
    expect(result.length).toBe(k);

    // Check that each pair contains valid task indices
    const allAssignedIndices = result.flat();
    expect(new Set(allAssignedIndices).size).toBe(tasks.length);

    // Verify optimal assignment strategy (pair shortest with longest)
    const pairSums = result.map(([i, j]) => tasks[i] + tasks[j]);
    const maxTime = Math.max(...pairSums);

    // Calculate expected optimal time (shortest + longest, second shortest + second longest, etc.)
    const sortedTasks = [...tasks].sort((a, b) => a - b);
    const expectedPairs = [];
    for (let i = 0; i < k; i++) {
      expectedPairs.push(
        sortedTasks[i] + sortedTasks[tasks.length - 1 - i],
      );
    }
    const expectedMaxTime = Math.max(...expectedPairs);

    expect(maxTime).toBe(expectedMaxTime);
  });

  it("should handle equal task durations", () => {
    const k = 2;
    const tasks = [5, 5, 5, 5];
    const result = taskAssignment(k, tasks);

    expect(result.length).toBe(k);

    // All pairs should have the same sum
    const pairSums = result.map(([i, j]) => tasks[i] + tasks[j]);
    const uniqueSums = new Set(pairSums);
    expect(uniqueSums.size).toBe(1);
    expect(uniqueSums.has(10)).toBe(true);
  });
});
