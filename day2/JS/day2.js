import { array } from "./inputArray.js"

const silver = (number, count) => {
    const solution = count
    console.log(solution)
    if (number === array.length) return solution

    const element = array[number]
    const condition = element[2]
    const conditionMin = parseInt(element[0])
    const conditionMax = parseInt(element[1])
    const string = element[3]
    const regex = new RegExp(condition, "gi")

    const matchesNumber = (string.match(regex) || []).length

    matchesNumber < conditionMin || matchesNumber > conditionMax
        ? silver(number + 1, solution)
        : silver(number + 1, solution + 1)
}

const gold = (number, count) => {
    const solution = count
    console.log(solution)
    if (number === array.length) return solution

    const element = array[number]
    const condition = element[2]
    const firstIndex = parseInt(element[0]) - 1
    const secondIndex = parseInt(element[1]) - 1
    const string = element[3]

    const verif1 = string[firstIndex]
    const verif2 = string[secondIndex]

    verif1 === condition || verif2 === condition
        ? verif1 === verif2
            ? gold(number + 1, solution)
            : gold(number + 1, solution + 1)
        : gold(number + 1, solution)
}

console.log(gold(0, 0))
