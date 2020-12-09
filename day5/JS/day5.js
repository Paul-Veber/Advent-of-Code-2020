import { array } from "./input.js"

const test = ["BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL", "FBFBBFFRLR"]

const checkRow = (ticket) => {
    const ticketRow = ticket.match(/[F,B]{7}/g)[0]

    const reponse = parseInt(ticketRow.replace(/F/g, 0).replace(/B/g, 1), 2)
    return reponse
}

//console.log(checkRow(test[1]))

const checkCol = (ticket) => {
    const TicketCol = ticket.match(/[L,R]{3}/g)[0]

    const reponse = parseInt(TicketCol.replace(/R/g, 1).replace(/L/g, 0), 2)
    return reponse
}

//console.log(checkCol(test[1]))

const checkTicket = (ticket) => {
    const list = []
    ticket.forEach((line) => {
        const row = checkRow(line)
        const col = checkCol(line)
        const Id = row * 8 + col
        list.push(Id)
    })
    console.log(list)
    return Math.max(...list)
}

//console.log(checkTicket(array))

const findSeat = (ticket) => {
    const list = []
    ticket.forEach((line) => {
        const row = checkRow(line)
        const col = checkCol(line)
        const Id = row * 8 + col
        list.push(Id)
    })
    list.sort((a, b) => a - b)
    
   const findSeat = (iteration, passList) => {
       const seatcheck = passList[iteration] +1
    return seatcheck === passList[iteration + 1]
    ? findSeat(iteration + 1, passList)
    : seatcheck
   } 

   return findSeat(0, list)
}

console.log(findSeat(array))