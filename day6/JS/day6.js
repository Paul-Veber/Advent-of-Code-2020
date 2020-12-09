import { array } from "./input2.js"

const test = "abc"
const countLetter0 = (groupe) => {
    const output = {}
    for (const letter in groupe) {
        output[groupe[letter]] = output[groupe[letter]] || 0
    }
    console.log(output)

    return Object.getOwnPropertyNames(output).length
}

const silver = (groupe) => {
    const countReponses = (iteration, groupe, acc) => {
        if (iteration === groupe.length) return acc
        const currentGroupe = groupe[iteration]
        const countYes = countLetter(currentGroupe)
        return countReponses(iteration + 1, groupe, acc + countYes)
    }
    return countReponses(0, groupe, 0)
}

const countLetter = (groupe) => {
    const output = {}
    for (const letter in groupe) {
        if (letter !== ",") {
            output[groupe[letter]] = output[groupe[letter]] || 0
            output[groupe[letter]]++
        }
    }
    return output
}

const yesInGroupe = (iteration, object, groupeSize, acc) => {
    const keysArray = Object.keys(object)
    if (keysArray.length === iteration) return acc

    const currentKey = keysArray[iteration]
    return object[currentKey] === groupeSize
        ? yesInGroupe(iteration + 1, object, groupeSize, acc + 1)
        : yesInGroupe(iteration + 1, object, groupeSize, acc)
}

const gold = (groupe) => {
    const countYes = (iteration, groupe, acc) => {
        if (iteration === groupe.length) return acc

        const currentGroupe = groupe[iteration]
        const groupYes = countLetter(currentGroupe)
        const groupeSize = currentGroupe.split(",").length

        const fullYesInGroupe = yesInGroupe(0, groupYes, groupeSize, 0)

        return countYes(iteration + 1, groupe, acc + fullYesInGroupe)
    }

    return countYes(0, groupe, 0)
}

console.log(gold(array))
