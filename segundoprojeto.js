function saldo(vitorias, derrotas) {
    let somatorio = vitorias - derrotas;
    return somatorio;
}

let resultadoFinal = saldo(58, 11);
let nomeDoJogador = "Luciano Henrique";
let nivelDoJogador;

if (resultadoFinal < 10){
    nivelDoJogador = "Ferro";
} else if (resultadoFinal >=11 && resultadoFinal <=20){
    nivelDoJogador = "Bronze";
} else if (resultadoFinal >=21 && resultadoFinal <=50){
    nivelDoJogador = "Prata";
} else if (resultadoFinal >=51 && resultadoFinal <=80){
    nivelDoJogador = "Ouro";
} else if (resultadoFinal >= 81 && resultadoFinal <=90){
    nivelDoJogador = "Diamante";
} else if (resultadoFinal >= 91 && resultadoFinal <=100){
    nivelDoJogador = "Imortal"
} else {
    nivelDoJogador = "Felipão da Dio"
}

console.log("O jogador " + nomeDoJogador + " obteve " + resultadoFinal + " vitórias e está no nivel" + nivelDoJogador);
