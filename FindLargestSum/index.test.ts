import findLargestSum from ".";

const mockTriangle1 = [
    [0]
];
const mockTriangle2 = [
    [1]
];
const mockTriangle3 = [
    [-1]
];
const mockTriangle4 = [
    [1], [2,4]
];
const mockTriangle5 = [
    [1], [5, 7], [7, 4, 52]
];
const mockTriangle6 = [
    [1], [3, -2], [4, -2, 6], [3, 13, 22, 14]
];

describe('Edge cases', () => {
    test('single number triangle with value 0', () => {
        const traversalArray = mockTriangle1;
        findLargestSum(traversalArray);
        expect(traversalArray[0][0]).toBe(0);
    });

    test('single number triangle with value 1', () => {
        const traversalArray = mockTriangle2;
        findLargestSum(traversalArray);
        expect(traversalArray[0][0]).toBe(1);
    });

    test('single number triangle with negative value', () => {
        const traversalArray = mockTriangle3;
        findLargestSum(traversalArray);
        expect(traversalArray[0][0]).toBe(-1);
    });

    test('triple number triangle ', () => {
        const traversalArray = mockTriangle4;
        findLargestSum(traversalArray);
        expect(traversalArray[0][0]).toBe(5);
    });

    test('3 row triangle with negative number', () => {
        const traversalArray = mockTriangle5;
        findLargestSum(traversalArray);
        expect(traversalArray[0][0]).toBe(60);
    });

    test('4 row triangle with negative value', () => {
        const traversalArray = mockTriangle6;
        findLargestSum(traversalArray);
        expect(traversalArray[0][0]).toBe(27);
    });
  });