const numero = Number(prompt("num 1: "))
const numero2 = Number(prompt("num 2: "))

const soma = numero + numero2

if(soma < 10){
    const numero = Number(prompt("num 1: "))
    const numero2 = Number(prompt("num 2: "))
    soma = numero + numero2
}
if(soma > 10 ){
    alert('Este número é maior que 10.' + ' E o resultado é: ' + soma)
} if(soma == 10){
    alert('Este número é igual a 10.' + ' E o resultado é: ' + soma)
} else {
    alert('Este número é menor que 10.' + ' E o resultado é: ' + soma)
}

