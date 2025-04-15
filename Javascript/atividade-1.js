const nome = "Samuel" //texto - string
const idade = 24 //número -number
const altura = 1.8 //número - number
const maiorDeIdade = true //booleano - bolean

console.log("Olá seu nome é " + nome) //concatenação
//Olá seu nome é Samuel, você tem 24 anos e sua altura é 1.80
console.log("Olá seu nome é " + nome + ", você tem " + idade + " anos e sua altura é " + altura) 

//Olá você é maior de idade?
console.log("Olá você é maior de idade? " + maiorDeIdade)

//template string ou string dinamica
const frase = `Olá seu nome é ${nome}`

console.log(frase)

console.log( 1 + 10) //log.( 1+"10") isso é diferente, essa forma é para texto, então apenas une