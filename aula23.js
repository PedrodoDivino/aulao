//Receber uma quantidade de valores para avaliar
// função exibe se cada valor é par ou é impar


function exibir(limit) {
    for (let i = 1; i<= limit; i++) {
        if ( i % 2 ===  0){
         console.log(i,'Par');
        }else{
            console.log(i,'Impar')
        }
    }
}
exibir(10);
