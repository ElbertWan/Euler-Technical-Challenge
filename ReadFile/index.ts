import { readFileSync } from "fs";

//convert txt file into double array numbers;
const readFile = (parsedArray: number[][], fileName: string) => {
  const file = readFileSync(fileName, "utf-8");
  const lineArray: string[] = [];
  for (const line of file.split(/[\r\n]+/)) {
    lineArray.push(line);
    const tempArray: number[] = [];
    for (const number of line.split(" ")) {
      tempArray.push(parseInt(number));
    }
    parsedArray.push(tempArray);
  }
};

export default readFile;
