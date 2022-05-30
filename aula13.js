// tipos de condicionais 
// if else - Switck Case
let hour =  new Date();
console.log(hour.getHours());

 if (hour > 6 || hour < 12) {
     console.log('bom dia')
 } else if (hour > 12 || hour < 18){
console.log('boa tarde')
 }else {
     console.log('boa noite')
 }