import { array } from "./input.js"

const resetPosition = (input, index) => {
    if (!input[index]) {
        const length = input.length - 1
        const newPosition = index - length - 1
        return newPosition
    } else return index
}

const checkThree = (iteration, iterationJump, index, indexJump, count) => {
    const solution = count
    console.log(`solution ${solution}`)
    if (iteration === array.length) return solution

    const currentIteration = iteration

    const ligne = array[iteration]

    const currentIndex = resetPosition(ligne, index)

    const check = ligne[currentIndex]

    check === "."
        ? checkThree(
              currentIteration + iterationJump,
              iterationJump,
              currentIndex + indexJump,
              indexJump,
              solution
          )
        : checkThree(
              currentIteration + iterationJump,
              iterationJump,
              currentIndex + indexJump,
              indexJump,
              solution + 1
          )
}

console.log(checkThree(0, 1, 0, 3, 0))

