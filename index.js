let nomeDoHeroi = "Luciano Henrique";
let xpDoHeroi = 71000;
let nivelDoHeroi;

if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi >= 5001 && xpDoHeroi <=6000){
    nivelDoHeroi = "Ouro";
}  else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000){
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
    nivelDoHeroi = "Lendário";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Felipão da Dio"
}

console.log("O herói de nome " + nomeDoHeroi  + " está no nível de " + nivelDoHeroi);


