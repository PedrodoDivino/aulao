let permissao;

switch (permissao) {
    case 'Comum': console.log('Usuario comum')
        break;
        case 'Gerente': console.log('Usuario gerente')
        break;
        case 'Diretor': console.log('Usuario Diretor')
        break;
    default:
        console.log('Usuario não reconhecido')
        break;
}