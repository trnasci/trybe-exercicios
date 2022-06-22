let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let f = 50;
let g = 30;


if (f > g) {
    console.log(f);
} else {
    console.log(g);
}


//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
let c = 20;
let d = 30;
let e = 5;
if (c > d) {
    if (c > e)
        console.log(c)
}
if (d > e) {
    console.log(d)
} else {
    console.log(e)
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" 
//se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let h = 0

if (h > 0) {
    console.log("Positive")  
}
if (h < 0){
    console.log("Negative")
} else {
    console.log("zero")
    
}

//🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um triângulo e false, 
//caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let a1 = 90
let a2 = -10
let a3 = 45
if (a1<0){
    console.log ("ERRO")
}
if (a2<0){
    console.log ("ERRO")
}
if (a3<0){
    console.log ("ERRO")
}

if ((a1 + a2 + a3)=== 180) {
    console.log(true)
} else {
    console.log(false)
}

