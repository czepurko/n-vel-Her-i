# 🦸 Sistema de Nível de Herói

Este é um projeto simples em JavaScript que determina o nível de um herói com base em sua experiência (XP). É uma ótima introdução à lógica de programação usando estruturas condicionais (`if / else if`).

---

## 💻 Tecnologias Utilizadas

- JavaScript puro (sem bibliotecas externas)
- Executado em ambiente Node.js ou no navegador
- Visual Studio Code (VS Code) como editor principal

---

## 🧠 Lógica do Projeto

O sistema funciona com base em uma quantidade de XP atribuída ao herói. Dependendo do valor informado, o herói recebe um nível conforme a seguinte tabela:

| Faixa de XP         | Nível       |
|---------------------|-------------|
| Menor que 1000      | Ferro       |
| 1001 a 2000         | Bronze      |
| 2001 a 5000         | Prata       |
| 5001 a 8000         | Ouro        |
| 8001 a 9000         | Platina     |
| 9001 a 10000        | Imortal     |
| Acima de 10000      | Desconhecido|

---

## ✨ Exemplo de Código

```javascript
let nomeHeroi = "Batman";
let xpHeroi = 12000;

let nivel;

if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 8000) {
  nivel = "Ouro";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivel = "Platina";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivel = "Imortal";
} else if (xpHeroi > 10000) {
  nivel = "Desconhecido";
}

console.log(`O herói ${nomeHeroi} está no nível ${nivel}`);
