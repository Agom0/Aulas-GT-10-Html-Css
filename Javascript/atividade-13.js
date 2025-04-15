//crie uma função que pegue a idade, genero e cidade de um usuario
//se o usuario for do sexo masculino e tiver mais de 18 anos
//exibir precisa de alistar
//se o usuario for do sexo masculino e tiver menos de 18 anos
//exiber pode se alistar

const user = {
    nome: "Alan",
    idade: 28,
    genero: "masculimo",
    cidade: "Fortaleza"
}

function verificarAlistamento(user) {
   if (user.genero == "masculino" && user.idade >= 18){
        console.log( "precisa se alistar")
   } else {
    console.log("não precisa se alistar")
   }  
 }

verificarAlistamento(user)

