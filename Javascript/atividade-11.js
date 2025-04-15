function aluguelCarro(dias){
    if (dias >15){
        const valorPordia =200
        const calculo = dias * valorPordia
        console.log(calculo)
    } else {
        const valorPordia = 250
        const calculo = dias * valorPordia
        console.log(calculo)
    }
}

aluguelCarro(10)
aluguelCarro(15)
aluguelCarro(16)