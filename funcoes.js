function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    console.log(valorEmDolarNumerico);

    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var ValorConvertido = "O resultado em real é R$" + valorEmReal;
    elementoValorConvertido.innerHTML = ValorConvertido;
}
