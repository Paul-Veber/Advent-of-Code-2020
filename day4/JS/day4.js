import { array } from "./input.js"

const check = (iter, string, properties) => {
    if (iter >= properties.length) return true

    const wordToSearch = properties[iter]
    const searchArray = new RegExp(wordToSearch, "gi")

    const verif = string.search(searchArray)

    return verif > -1 ? check(iter + 1, string, properties) : false
}

const requiredFiles = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]

const silver = (iteration, acc) => {
    const accumulator = acc
    if (iteration >= array.length) return accumulator
    console.log(iteration)
    const passeport = array[iteration]
    const passeportcheck = check(0, passeport, requiredFiles)
    console.log(passeportcheck)
    return passeportcheck
        ? silver(iteration + 1, accumulator + 1)
        : silver(iteration + 1, accumulator)
}

//console.log(`soluce = ${silver(0, 0)}`)

const arrangeKey = (string) => {
    const keyMap = new Map()
    const splitString = string.split(",")
    splitString.forEach((element) => {
        const [key, value] = element.split(":")
        keyMap.set(key, value)
    })
    return keyMap
}

const verifPassport = (boolean, passtoCheck) => {
    if (boolean) {
        const keyVerif = (key) => passtoCheck.get(key)

        const byr = parseInt(keyVerif("byr"))
        const iyr = parseInt(keyVerif("iyr"))
        const eyr = parseInt(keyVerif("eyr"))
        const hgt = keyVerif("hgt")
        const hgtInch = hgt.search(/in/gi)
        const hgtCm = hgt.search(/cm/gi)
        const hgtNumber = parseInt(hgt.match(/\d+/g))

        if (byr < 1920 || byr > 2002) return false
        if (iyr < 2010 || iyr > 2020) return false
        if (eyr < 2020 || eyr > 2030) return false
        console.log(hgtCm, hgtInch)
        if (hgtInch < 0 && hgtCm < 0) return false
        if (keyVerif("hgt").search(/cm/gi) > -1) {
            if (hgtNumber < 150 || hgtNumber > 193) return false
        }
        if (hgt.search(/in/gi) > -1)
            if (hgtNumber < 59 || hgtNumber > 76) return false
        if (!/^#([a-f0-9]{6})$/gi.test(keyVerif("hcl"))) return false

        const colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]

        for (const color of colors) {
            const verifColor = keyVerif("ecl").search(color)
            if (verifColor > -1) break
            if (color === "oth") return false
        }
        if (!/^[0-9]{9}$/g.test(keyVerif("pid"))) return false

        return true
    } else return false
}

const gold = (iteration, acc) => {
    const solution = acc
    if (iteration === array.length) return solution
    console.log(iteration)
    const passport = array[iteration]

    const checkPass = check(0, passport, requiredFiles)

    const splitPasseport = arrangeKey(passport)
    console.log(checkPass)

    const checkPassport = verifPassport(checkPass, splitPasseport)
    console.log(checkPassport)

    return checkPassport
        ? gold(iteration + 1, solution + 1)
        : gold(iteration + 1, solution)
}
console.log(gold(0, 0))
