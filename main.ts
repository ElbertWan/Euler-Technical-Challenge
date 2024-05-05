import readFile from "./ReadFile";
import findLargestSum from "./FindLargestSum";

const traversalArray: number[][] = [];
readFile(traversalArray, "triangle.txt");
findLargestSum(traversalArray);

console.log('Largest sum in the triangle is:', traversalArray[0][0]);
