const moment = require('moment')
const data = moment().format('DD/MM/YYYY hh:mm')

exports.intro = () => {
    console.log("------- Universo dos livros -------") 
    console.log("- Lista de produtos - " + data + " -")
}

exports.frete = (valor) => {
    if (valor < 200.00) {
    console.log("Frete fixo de R$20,00 para qualquer região do Brasil")
} else {
    console.log("FRETE GRÁTIS")
}
}