/*
leetcode - Fruit Into Baskets

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

-You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
-Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
-Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array fruits, return the maximum number of fruits you can pick.
*/

// input: an array of integers
// output: an integer which represents the most amount of possible fruit obtained from fruit trees, represented as the input of integers
// constraints: 1 <= fruits.length <= 105. 0 <= fruits[i] < fruits.length
// edge cases: none at this time
const totalFruit = (fruits) => {
  // create the following variables: last_fruit, second_last_fruit, last_fruit_count, current_max, max, assign to -1, -1, 0, 0, 0 respectively
  // for of loop over fruits
    // if fruit equals last_fruit OR fruit equals second_last_fruit
      // increment current_max OR current_max equals last_fruit_count + 1
      // if fruit equals last_fruit
        // increment last_fruit_count OR
        // last_fruit_count equals 1

      // if fruit doesn't equal last_fruit
        // second_last_fruit equals last_fruit
        // last_fruit equals fruit

        // max equals Math.max of max and current_max

    // return max
};

console.log(totalFruit([1, 2, 1])); // 3
// Explanation: We can pick from all 3 trees

console.log(totalFruit([0, 1, 2, 2])); // 3
// Explanation: We can pick from trees [1,2,2]. If we had started at the first tree, we would only pick from trees [0,1]

console.log(totalFruit([1, 2, 3, 2, 2])); // 4
// Explanation: We can pick from trees [2,3,2,2]. If we had started at the first tree, we would only pick from trees [1,2]
