function FormaDinheiro(decimal){
    
    valorConvertido = `R$ ${decimal.toFixed(2).toString().replace("." , ",")}`

    console.log(valorConvertido)

}

FormaDinheiro(0.1 + 0.2)