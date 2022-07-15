function maiorMenor(num1, num2){

    const soma = num1 + num2;

    let soma10 = 'menor';
    let soma20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    
    
    if (soma == 10){
        soma10 = 'igual a'
    }else if(compara10){
        soma10 = 'maior que'
    }

    if (soma == 20){
        soma20 = 'igual a'
    }else if(compara20){
        soma20 = 'maior que'
    }
    
    return `Sua soma é ${soma} que é ${soma10} 10 e ${soma20} 20` 
}

function diferenteIgual(num1, num2){

    let saoIguais = 'são';

    if (num1 != num2){
        saoIguais = 'não são'
    }

    return `Os números ${num1} e ${num2} ${saoIguais} iguais. `
}

function fraseCompleta (num1, num2){
    if (!num1 || !num2) return "Insira dois números"
    const primeiraFrase = diferenteIgual(num1, num2);
    const segundaFrase = maiorMenor(num1, num2);
    return `${primeiraFrase} ${segundaFrase}`;
}

console.log(fraseCompleta(0, 1));