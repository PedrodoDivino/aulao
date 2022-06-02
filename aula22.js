// verificar velocidade máxima de até 70km
// a cada 5km acima do limite você ganha 1 ponto
// math.floor()
// caso pontos forem maior que 12 carteira suspensa

function radar(vel) {
    const velMax= 70;
    const kmPts = 5;
    if (vel <= velMax)
   console.log('ok');
   else {
    const pontos = Math.floor(((vel - velMax) / kmPts));
    if (pontos >= 12){
       console.log('Carteira Suspensa!');
    }else{
        console.log(pontos,'pontos');
    }
   }
    }
    radar(130);

