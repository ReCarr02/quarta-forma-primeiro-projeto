console.log ("Digite o nome do herói")
let nickname = "Skuld"
console.log ("Olá, " + nickname + "!")
let xp = 10001
let levelFerro = "Ferro"
let levelBronze = "Bronze"
let levelPrata = "Prata"
let levelOuro = "Ouro"
let levelPlatina = "Platina"
let levelAscendente = "Ascendente"
let levelImortal = "Imortal"
let levelRadiante = "Radiante"

if (xp <= 1000){
    xp = levelFerro
}else if (xp > 1000 && xp <=2000){
    xp = levelBronze
}else if (xp > 2000 && xp <=5000){
    xp = levelPrata
}else if (xp > 5000 && xp <=7000){
    xp = levelOuro
}else if (xp > 7000 && xp <=8000){
    xp = levelPlatina
}else if (xp > 8000 && xp <=9000){
    xp = levelAscendente
}else if (xp > 9000 && xp <=10000){
    xp = levelImortal
}else {
    xp = levelRadiante
}
console.log ("O herói " + nickname + " está no nível " + xp)