//atividade 01
/*for(var i = 0; i <= 10; i++){
    console.log(i)
}

//atividade 02
var numero = prompt('Digite um número inteiro.')
for(var i = 0; i <=10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`)
}

//atividade 03
var num = prompt('Digite um número inteiro e positivo.')
for(var i = num; i >= 0; i--){
    console.log(i)
}

//atividade 04
var num =  parseFloat(prompt('Digite um número inteiro.'))

contador = 0
for(var i = 1; i <= num; i++){
    if(num % i == 0){
        contador++
    }
}
console.log(`O número ${num} tem ${contador} divisores.`)
if(contador == 2){
    console.log(`O número ${num} é primo`)
} else {
    console.log(`O número ${num} não é primo`)
}


//atividade 05
var texto = prompt(`Digite uma palavra qualquer.`).toLowerCase()

for(letra of texto){
    if(letra != 'a' && letra !='e' && letra !='i' && letra!='o' && letra !='u'){
        console.log(letra)
    }
}

//atividade 06
var texto = prompt(`Digite uma palavra qualquer.`)
var arrTexto = new Array()
for (i in texto){
    arrTexto.push(texto[i])
}
var arrInverso = arrTexto.reverse()

var inverso = ''
for(i in arrInverso){
    inverso += arrInverso[i]
}

if(texto == inverso){
    console.log(`A palavra ${texto} é um palíndromo`)
} else {
    console.log(`A palavra ${texto} não é um palíndromo`)
}

//ativiade 07
var palavra = prompt('Digite uma palavra').toLowerCase()
contador = 0
for(letra of palavra){
    if( letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        contador++
    }
}
console.log(`Apalavra ${palavra} tem ${contador} vogais`)

//atividade 08

for(var i = 3; i <= 30; i+=3){
    console.log(i)
}*/


//Desafio
while(true){
    var choice = prompt(`Vamos jogar o dado, vai dar Par ou Ímpar?`).toLowerCase()
    var num = Math.round(Math.random() * 10)

    if (num >= 1 && num <= 6){
        console.log(`Resultado: ${num}`)
    }
    console.log(`Você escolheu:`, choice)

    if(num % 2 == 0 && choice == 'par'){
        console.log(`Deu par, você acertou.`)
    } else if(num % 2 == 0 && choice == 'impar'){
        console.log(`Deu par, você errou.`)
    } else if(num % 2 == 1 && choice == 'impar'){
        console.log(`Deu ímpar, você acertou.`)
    } else {
        console.log(`Deu ímpar, você errou.`)
    }
    
    
    var continuar = prompt(`deseja continuar?
    [1] Sim
    [2] Não`)

    if(continuar == 2){
        break
    }
    
}