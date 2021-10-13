function Divisao(dividendo, divisor){

    let resultado = dividendo / divisor;
    let resto = dividendo % divisor

    console.log("Resultado:", Math.floor(resultado))
    console.log("Resto:", resto)
}

Divisao(11, 4)