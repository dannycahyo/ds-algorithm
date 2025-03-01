/*
Permutations

Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.

If the input array is empty, the function should return an empty array.

Sample Input
array = [1, 2, 3]
Sample Output
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

## Intuition
A permutation is defined as a way in which a set of things can be ordered. 
Thus, for the list [1, 2, 3], there exist some permutations starting with 1, some starting with 2, and some starting with 3. 
For the permutations starting with 1, there will be a permutation where 2 is the second number and one where 3 is the second number. 
For permutations starting with 3, there will be a permutation where 1 is the second number and one where 2 is the second number. 
The idea is that, in order to construct a permutation, we can pick a random number from our list to be the first number, 
then we can pick a random number from the remaining list (without the first number) 
to be the second number, then we can pick a random number from the remaining list (without the first and second numbers) to be the third number, 
and we can repeat the process until we exhaust all of our list of numbers. At that point, we will have constructed a valid permutation. 
How can we implement this construction algorithmically, without picking numbers at random?
*/

function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(
  array,
  currentPermutations,
  permutations,
) {
  if (!array.length && currentPermutations.length) {
    permutations.push(currentPermutations);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutations.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

console.log(getPermutations([1, 2, 3]));
