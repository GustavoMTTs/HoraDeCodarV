let saldo = 0;
let extrato = [];
const senhaCorreta = 3589;
let nomeUsuario;

function iniciar() {
    nomeUsuario = prompt("Qual é o seu nome?");
    console.log(`Olá ${nomeUsuario}, é um prazer ter você por aqui!`);
    menuPrincipal();
}

function menuPrincipal() {
    console.log(`\nMenu Principal:
    1. Saldo
    2. Extrato
    3. Saque
    4. Depósito
    5. Transferência
    6. Sair`);

    let opcao = prompt("Escolha uma opção:");

    switch (opcao) {
        case '1':
            verificarSenha(saldoMenu);
            break;
        case '2':
            verificarSenha(extratoMenu);
            break;
        case '3':
            verificarSenha(saqueMenu);
            break;
        case '4':
            verificarSenha(depositoMenu);
            break;
        case '5':
            verificarSenha(transferenciaMenu);
            break;
        case '6':
            console.log(`${nomeUsuario}, foi um prazer ter você por aqui!`);
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            menuPrincipal();
            break;
    }
}

function verificarSenha(funcao) {
    let senha = parseInt(prompt("Digite sua senha:"));
    if (senha === senhaCorreta) {
        funcao();
    } else {
        console.log("Senha incorreta. Tente novamente.");
        verificarSenha(funcao);
    }
}

function saldoMenu() {
    console.log(`Seu saldo é R$${saldo.toFixed(2)}`);
    menuPrincipal();
}

function extratoMenu() {
    console.log("Extrato:");
    if (extrato.length === 0) {
        console.log("Nenhuma operação registrada.");
    } else {
        extrato.forEach((operacao, index) => {
            console.log(`${index + 1}. ${operacao}`);
        });
    }
    menuPrincipal();
}

function saqueMenu() {
    let valor = parseFloat(prompt("Digite o valor que deseja sacar:"));
    if (valor <= 0) {
        console.log("Operação não autorizada.");
        return menuPrincipal();
    }
    if (valor > saldo) {
        console.log("Operação não autorizada.");
        return menuPrincipal();
    }
    saldo -= valor;
    extrato.push(`Saque de R$${valor.toFixed(2)}`);
    console.log(`Saque realizado com sucesso! Seu novo saldo é R$${saldo.toFixed(2)}`);
    menuPrincipal();
}

function depositoMenu() {
    let valor = parseFloat(prompt("Digite o valor que deseja depositar:"));
    if (valor <= 0) {
        console.log("Operação não autorizada.");
        return menuPrincipal();
    }
    saldo += valor;
    extrato.push(`Depósito de R$${valor.toFixed(2)}`);
    console.log(`Depósito realizado com sucesso! Seu novo saldo é R$${saldo.toFixed(2)}`);
    menuPrincipal();
}

function transferenciaMenu() {
    let conta = prompt("Digite o número da conta para transferência:");
    if (isNaN(conta)) {
        console.log("Número da conta inválido. Deve conter apenas números.");
        return menuPrincipal();
    }
    let valor = parseFloat(prompt("Digite o valor que deseja transferir:"));
    if (valor <= 0) {
        console.log("Operação não autorizada.");
        return menuPrincipal();
    }
    if (valor > saldo) {
        console.log("Operação não autorizada.");
        return menuPrincipal();
    }
    saldo -= valor;
    extrato.push(`Transferência de R$${valor.toFixed(2)} para a conta ${conta}`);
    console.log(`Transferência realizada com sucesso! Seu novo saldo é R$${saldo.toFixed(2)}`);
    menuPrincipal();
}

// Inicia o sistema
iniciar();
