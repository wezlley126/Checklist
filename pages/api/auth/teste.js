function validarCPF(cpf) {
    //cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false; // Verifica se CPF tem 11 dígitos e se não são todos iguais

    // Algoritmo de validação de CPF
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    return parseInt(cpf.charAt(9)) === digitoVerificador1 && parseInt(cpf.charAt(10)) === digitoVerificador2;
}

// Exemplo de uso:
//const cpf = '123.456.789-09';
if (validarCPF('08904478375')) {
    console.log('CPF válido---------------------------------------');
} else {
    console.log('CPF inválido------------------------------------');
}

export default validarCPF;