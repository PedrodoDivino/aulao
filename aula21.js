// Divisivel por 3, retorna fizzBuzz  []
// se temos uma valor divisivel por 5, retorna Buzz  []
// temos um valor que é divisivel tanto por 3 quanto por 5 retornamos fizzBuzz []
// mão temos um valor que não é divisivel por  3 e nem por 5 , retornamos o mesmo valor  []
// se temos um valor que não é um numero, ele vai nos dizer que não é um número   []

// for (let i = 3; i <=30; i++) {
// if ( i % 3 === 0 && i % 5 === 0){
//     console.log((i),'FizzBuzz');
// }else if (i % 3 == 0){
// console.log([i],'Fizz')
// } else if (i % 5 == 0){
//    console.log([i],'Buzz'); 
// }else {
//     console.log(i)
// }
// }

 /* Leitura do código 
 
 Eu faço um FOR para ele fazer um loop por todos os números
 A minha variavel i recebe um valor por exemplo 3
 se ela for menor ou igual a 30 eu quero que ele faça o incremento adicionando sempre 1 numero
 depois disso faço as validações.
  
 1 - Se o meu número for divido por 3 e por 5, o resto dele vai ser 0, logo ele peço para ele me retorar 
 a palavbra completa "FizBuzz".

 2- se ele for divido apenas por 3, eu peço para ele me retornar apenas a palavra "Fizz"

 3- se ele for divido por 5 e não por 3, eu peço para ele me retornar a palavra "buzz",
 
 4- se não for divisivel por 3 e nem por 5, eu peço pala ele me retornar o numero que me foi colocado. 
 Agora vamos para outra forma de fazer o fizzBuzz, mas com funções: 
 */


 function fizzBuzz(e) {
     if ( typeof e !== 'number')
     return 'não é um numero';
     if ((e % 3 == 0) && (e % 5 == 0))
     return 'FizBuzz';
     if (e % 3 == 0)
     return 'Fizz';
     if (e % 5 == 0)
     return 'Buzz';
     return e;
     }

 const res = fizzBuzz(false);
 console.log(res);
