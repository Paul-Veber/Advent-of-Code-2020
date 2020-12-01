import { input } from "/inputarray.js";

const silver = () => {
  for (const number of input) {
    const substraction = 2020 - number;
    const search = input.indexOf(substraction);
    console.log(search);
    if (search >= 0) {
      console.log("test");
      const first = number;
      const second = substraction;
      const solution = first * substraction;
      const solutionString = `${first} X ${second} = ${solution}`;
      return solutionString;
    }
  }
};

const gold = () => {
  for (const number of input) {
    for (const subNumber of input) {
      const substraction = 2020 - number - subNumber;
      const search = input.indexOf(substraction);
      if (search >= 0) {
        const first = number;
        const second = subNumber;
        const third = substraction;
        const solution = first * second * third;
        const solutionString = `${first} X ${second} X ${third} = ${solution}`;
        return solutionString;
      }
    }
  }
};

console.log(silver());
console.log(gold());
