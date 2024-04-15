//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)

export const matrix2: WeightedAdjacencyMatrix = [
  //0  1  2  3  4  5  6
  [0, 3, 1, 0, 0, 0, 0], // (0) has edges to (1) with weight 3 and to (2) with weight 1
  [0, 0, 0, 0, 1, 0, 0], // (1) has an edge to (4) with weight 1
  [0, 0, 0, 7, 0, 0, 0], // (2) has an edge to (3) with weight 7
  [0, 0, 0, 0, 0, 0, 0], // (3) has no edges
  [0, 1, 0, 5, 0, 2, 0], // (4) has edges to (1) with weight 1, to (3) with weight 5, and to (5) with weight 2
  [0, 0, 18, 0, 0, 0, 1], // (5) has edges to (2) with weight 18 and to (6) with weight 1
  [0, 0, 0, 1, 0, 0, 1], // (6) has an edge to (3) with weight 1 and a loop to itself with weight 1
];

export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number,
): number[] | null {
  const visitedVertices: boolean[] = new Array(graph.length).fill(
    false,
  );
  const queue: number[] = [];
  const parent: number[] = new Array(graph.length).fill(-1);

  queue.push(source);
  visitedVertices[source] = true;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === needle) {
      const path: number[] = [];
      let at = current;

      while (at !== -1) {
        path.unshift(at);
        at = parent[at];
      }

      return path;
    }

    for (let i = 0; i < graph[current].length; i++) {
      if (graph[current][i] === 0) continue;

      if (!visitedVertices[i]) {
        visitedVertices[i] = true;
        parent[i] = current;
        queue.push(i);
      }
    }
  }

  return null;
}

console.log(bfs(matrix2, 0, 6)); // [0, 1, 4, 5, 6]
