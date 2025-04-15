//uma função que receba os dias e os kms rodados
//o valor por dia é 250
//o valor por km rodado é 0.50
//se tiver rodados mais de 1000km, o valor por km rodado é 0.25
function calcularAluguel(dias, kms){
    const valorPorDia = 250;
   
    if(kms > 1000){
        const valorporKm = 0.25;
        const calculoDiaria = dias * valorPorDia
        const valorkm = kms * valorPorKm;

        const total = calculoDiaria + valorkm;
        console.log(total)
    } else {
        const valorporKm = 0.50;
        const calculoDiaria = dias * valorPorDia
        const valorkm = kms * valorPorKm;

        const total = calculoDiaria + valorkm;
        console.log(total)
        
    }
} 
