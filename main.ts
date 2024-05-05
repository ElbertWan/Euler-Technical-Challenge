import readFile from "./ReadFile";
import findLargestSum from "./FindLargestSum";

const triangularArray: number[][] = [];
readFile(triangularArray, "triangle.txt");
findLargestSum(triangularArray);

console.log("Largest sum in the triangle is:", triangularArray[0][0]);
