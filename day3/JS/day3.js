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
    if (iteration >= array.length) return solution
    console.log(iteration)

    const currentIteration = iteration

    const ligne = array[iteration]

    const currentIndex = resetPosition(ligne, index)

    const check = ligne[currentIndex]

    return check === "."
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

const solution =
    checkThree(0, 1, 0, 1, 0) *
    checkThree(0, 1, 0, 3, 0) *
    checkThree(0, 1, 0, 5, 0) *
    checkThree(0, 1, 0, 7, 0) *
    checkThree(0, 2, 0, 1, 0)

console.log(solution)
