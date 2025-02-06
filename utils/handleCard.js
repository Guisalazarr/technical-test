import { toFormatReal } from "./toFormatReal.js"

// Controla o texto do card
export function handleCard (data) {
    document.getElementById('income').innerText = toFormatReal(data.income)
    document.getElementById('outcome').innerText = toFormatReal(data.outcome)  
    document.getElementById('total').innerText = toFormatReal(data.total)
  }