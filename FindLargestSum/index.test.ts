import findLargestSum from ".";

const mockTriangle1 = [[0]];
const mockTriangle2 = [[1], [2, 3], [3, 3, 3]];
const mockTriangle3 = [[-1]];
const mockTriangle4 = [[1], [2, 4]];
const mockTriangle5 = [[1], [5, 7], [7, 4, 52]];
const mockTriangle6 = [[1], [3, -2], [4, -2, 6], [3, 13, 22, 14]];

describe("Edge cases", () => {
  test("single number triangle with value 0", () => {
    const parsedArray = mockTriangle1;
    const largestSum = findLargestSum(parsedArray);
    expect(largestSum).toBe(0);
  });

  test("triple row triangle with equal sum", () => {
    const parsedArray = mockTriangle2;
    const largestSum = findLargestSum(parsedArray);
    expect(largestSum).toBe(7);
  });

  test("single number triangle with negative value", () => {
    const parsedArray = mockTriangle3;
    const largestSum = findLargestSum(parsedArray);
    expect(largestSum).toBe(-1);
  });

  test("triple number triangle ", () => {
    const parsedArray = mockTriangle4;
    const largestSum = findLargestSum(parsedArray);
    expect(largestSum).toBe(5);
  });

  test("3 row triangle with negative number", () => {
    const parsedArray = mockTriangle5;
    const largestSum = findLargestSum(parsedArray);
    expect(largestSum).toBe(60);
  });

  test("4 row triangle with negative value", () => {
    const parsedArray = mockTriangle6;
    const largestSum = findLargestSum(parsedArray);
    expect(largestSum).toBe(27);
  });
});
