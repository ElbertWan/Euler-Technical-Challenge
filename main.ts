import { readFileSync } from 'fs';

//convert txt file into double array numbers;
const readFile = (traversalArray:  number[][]) => {
    const file = readFileSync('triangle.txt', 'utf-8');
    const lineArray: string[] = [];
    for (const line of file.split(/[\r\n]+/)){
        lineArray.push(line);
        const tempArray: number[] = [];
        for (const number of line.split(" ")){
            tempArray.push(parseInt(number));
        }
        traversalArray.push(tempArray);
    }
}

//find largest sum from bottom of triangle using traversal array
const findLargestSum = (traversalArray:  number[][]) => {
    for (let row = traversalArray.length - 1 ; row > 0 ; row--){
        for (let column = 0 ; column < traversalArray[row].length-1 ; column++){
            const maxNumber = Math.max(traversalArray[row][column], traversalArray[row][column+1]);
            const newSum = traversalArray[row-1][column] + maxNumber;
            traversalArray[row-1][column] = newSum;
        }
    }
}

const traversalArray: number[][] = [];
// const nodearray: TreeNode[] = [];
readFile(traversalArray);
findLargestSum(traversalArray);


console.log(traversalArray[0][0])


