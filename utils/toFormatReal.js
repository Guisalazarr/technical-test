export function toFormatReal(value) {
    const formated = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    return formated
}