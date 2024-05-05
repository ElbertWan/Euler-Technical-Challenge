import readFile from "./ReadFile";
import findLargestSum from "./FindLargestSum";

const triangularArray: number[][] = [];
readFile(triangularArray, "triangle.txt");
const largestSum = findLargestSum(triangularArray);

console.log("Largest sum in the triangle is:", largestSum);
