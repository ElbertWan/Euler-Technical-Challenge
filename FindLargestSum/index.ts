//find largest sum from bottom of triangle using traversal array
const findLargestSum = (traversalArray: number[][]) => {
    if (traversalArray.length === 1){
        return;
    }

  for (let row = traversalArray.length - 1; row > 0; row--) {
    for (let column = 0; column < traversalArray[row].length - 1; column++) {
      const maxNumber = Math.max(
        traversalArray[row][column],
        traversalArray[row][column + 1],
      );
      const newSum = traversalArray[row - 1][column] + maxNumber;
      traversalArray[row - 1][column] = newSum;
    }
  }
};

export default findLargestSum;
