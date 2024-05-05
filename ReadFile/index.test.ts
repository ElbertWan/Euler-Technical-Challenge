import readFile from ".";


const mockTriangle = [
    [1], [1, 2], [1, 2, 3]
];


describe('Edge cases', () => {
    test('read file of triangular numbers', () => {
        const traversalArray: number[][] = [];
        readFile(traversalArray, './ReadFile/__mocks__/mockTriangle.txt');
        expect(traversalArray).toStrictEqual(mockTriangle);
    });
  });