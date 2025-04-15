const user = {
   nome: "Alan",
   altura: 1.71,
   peso: 70,
}

console.log(user.nome)

//criar uma função que receba o objeto user
//e calcule o IMC
//IMC = peso / (altura * altura)

function calularIMC(user) {
   const IMC = user.peso / (user.altura * user.altura)

   console.log(IMC.toFixed(2))

   if (imc< 16){
     return console.log ("magreza grave")
   } if (imc >=16 && imc <16.90){
     return console.log("magreza moderada")
   } if (imc >=17 && imc <18.55){
     return console.log( "magreza leve")
   } if (imc >=18.5 && imc<24.9){
     return console.log("peso normal")
   } if (imc >=25 && imc <29.9){
     return console.log ("sobrepeso")
   } if (imc >=30 && imc <34.9){
     return console.log("obesidade grau 1")
   } if (imc >=35 && imc< 39.9){
     return console.log ("obesidade grau 2")
   }
}
 calularIMC(user)

 