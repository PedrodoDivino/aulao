//Operadores logicos &&

// console.log(true && true);
// console.log(false && true); isso independente da ordem


let idade = 18;
let faculdade = true;
let sabeProgramar = false;

let vaga =  idade >= 18 && faculdade == true || sabeProgramar ? 'Aprovado' : 'Reprovado' ;
console.log(vaga)
