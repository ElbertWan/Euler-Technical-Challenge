//find largest sum from bottom of triangle using traversal array
const findLargestSum = (triangularArray: number[][]): number => {
  for (let row = triangularArray.length - 1; row > 0; row--) {
    for (let column = 0; column < triangularArray[row].length - 1; column++) {
      //find the highest number between the pair
      const maxNumber = Math.max(
        triangularArray[row][column],
        triangularArray[row][column + 1],
      );
      //update the row above with a cumulative sum
      const newSum = triangularArray[row - 1][column] + maxNumber;
      triangularArray[row - 1][column] = newSum;
    }
  }

  return triangularArray[0][0];
};

export default findLargestSum;
