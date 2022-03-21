const { intro, frete } = require("../lib/funcoes")
const { livros } = require("../model/dados")
let valorTotal = 0

function listaProdutos ( ) {
for (let i = 0; i < livros.length; i++) {
    console.log(livros[i].id + " -  Livro: " + livros[i].nome + " - R$" + livros[i].valor)
    valorTotal += livros[i].valor 
}
}

exports.principal = () => {
    intro()
    listaProdutos()
    console.log("-- Total: R$" + valorTotal + " --")
    frete(valorTotal)
}