export const list: WeightedAdjacencyList = [];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
list[0] = [
  { to: 1, weight: 3 },
  { to: 2, weight: 1 },
];
list[1] = [{ to: 4, weight: 1 }];
list[2] = [{ to: 3, weight: 7 }];
list[3] = [];
list[4] = [
  { to: 1, weight: 1 },
  { to: 3, weight: 5 },
  { to: 5, weight: 2 },
];
list[5] = [
  { to: 2, weight: 18 },
  { to: 6, weight: 1 },
];
list[6] = [{ to: 3, weight: 1 }];

// Iterative Approach
export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] | null {
  const visitedVertices: boolean[] = new Array(graph.length).fill(
    false,
  );
  const stack: number[] = [];
  const parent: number[] = new Array(graph.length).fill(-1);

  stack.push(source);
  visitedVertices[source] = true;

  while (stack.length > 0) {
    const current = stack.pop();

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
      const { to } = graph[current][i];

      if (!visitedVertices[to]) {
        visitedVertices[to] = true;
        parent[to] = current;
        stack.push(to);
      }
    }
  }

  return null;
}

console.log(dfs(list, 0, 6)); // [0, 1, 4, 5, 6]

// Recursive Approach

/*
Graph:
  0--1--4--5--6
  |
  2--3

DFS(graph, 0, 6):

Call DFS(0, 6):
  visited: [0]
  path: [0]
  Call DFS(1, 6):
    visited: [0, 1]
    path: [0, 1]
    Call DFS(4, 6):
      visited: [0, 1, 4]
      path: [0, 1, 4]
      Call DFS(5, 6):
        visited: [0, 1, 4, 5]
        path: [0, 1, 4, 5]
        Call DFS(6, 6):
          visited: [0, 1, 4, 5, 6]
          path: [0, 1, 4, 5, 6]
          Return path: [0, 1, 4, 5, 6]
        Return path: [0, 1, 4, 5, 6]
      Return path: [0, 1, 4, 5, 6]
    Return path: [0, 1, 4, 5, 6]
  Return path: [0, 1, 4, 5, 6]

Final path: [0, 1, 4, 5, 6]
*/

function walk(
  graph: WeightedAdjacencyList,
  source: number,
  target: number,
  visited: boolean[],
  path: number[],
): number[] | null {
  visited[source] = true;
  path.push(source);

  if (source === target) {
    return path;
  }

  for (let i = 0; i < graph[source].length; i++) {
    const { to } = graph[source][i];

    if (!visited[to]) {
      const result = walk(graph, to, target, visited, path);

      if (result) {
        return result;
      }
    }
  }

  path.pop();
  return null;
}

function DFS(
  graph: WeightedAdjacencyList,
  source: number,
  target: number,
): number[] | null {
  const visited: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  return walk(graph, source, target, visited, path);
}

console.log(DFS(list, 0, 6)); // [0, 1, 4, 5, 6]
