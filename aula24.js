// criar um  método para ler propriedades de um objeto e 
// exibir somente as propriedades do tipo string que estão nesse objeto

const lead = {
    name: 'Pedro henrique',
    age: 25,
    telephone: 99999999,
    email: 'pedro@email.com',
    mensagem: 'Olá, meu nome é Pedro Henrique e gostaria de saber mais sobre o negócio'
}

function showProp(obj){
for ( prop in obj){
    if ( typeof obj[prop] === 'string')
    console.log (obj[prop])
}
}
showProp(lead);
