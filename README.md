# Euler-Technical-Challenge

Technical Challenge for Euler (Maximum Path Sum II)

- link is [here](https://projecteuler.net/problem=18)

---

## Running the project

- run `npm i` in the source directory
- run `npm run start` calculate the maximum sum of the number triangle stored in `triangle.txt`
- run `npm run test` to run the test cases in the code

---

## Changable files

- You can alter `triangle.txt` to any triangular number scheme. Note that each number must have a whitespace in between.

## Project Layout

Project is laid out as follows:

- main.ts
- FindLargestSum
  - index.test.ts
  - index.ts
- ReadFile
  - index.test.ts
  - index.ts

## Logic Breakdown

If we look at the triangle and try to find the maximum sum starting from the top, we would have to traverse all routes. This is because there is no certainty whether there will be a large number at the very bottom that will change the sum, thus we can't clip the routes. In this case, a binary tree would be a good option. However if we flip the triangle upside down and work backwards, we can cut off any routes by comparing pairs (think of this as a triangle of 3 numbers). This is because we know 100% certainty the bottom numbers. The logic we use here is fairly simple, we compare the pair from the bottom row, and take the larger number and add it to the top of the 3 number triangle above. We keep doing this until we reach the top point, whence we'll get the largest sum.
