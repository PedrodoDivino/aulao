// criar  função que retorna somente os multiplos de 3 e multiplos de 5
// trabalhgar somente com de 1 a 10
// multiplos de 3
//3,6,9
// multiplos de 5 
// 5, e 10

// somar os multiplos, por exemplo 3+ 6 +9 +5+ 10 = 33
// Dicas: 01 - armazenar os multiplos de 3 
//        02 -armazenar os multiplos de  5
//        03- somar os 2


 
somar(10);
function somar(limite) {
    let m3 = 0;
    let m5 = 0;
    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0)
        m3 += i;
        if(i % 5 === 0){
            m5 += i;
        }
        console.log(m3 + m5)
    }
}




