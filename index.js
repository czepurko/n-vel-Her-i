// Variáveis do herói
let nomeHeroi = "Batman";
let xpHeroi = 12000;

// Estrutura de decisão
let nivel;

if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivel = "Prata";
} else if (xpHeroi >=5001 && xpHeroi<=8000) {
  nivel = "Ouro";
}else if (xpHeroi >=8001 && xpHeroi<= 9000){
    nivel="Platina";
}else if (xpHeroi >=9001 && xpHeroi <=10000){
    nivel="Imortal";
}else if (xpHeroi >=10000){
nivel="desconhecido";
}

// Exibindo a mensagem
console.log(`O herói ${nomeHeroi} está no nível ${nivel}`);