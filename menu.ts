import ler = require("readline-sync");
import { colors } from "./src/util/colors";
import { Conta } from "./src/model/conta";

import { ContaCorrente } from "./src/model/contaCorrente";
import { ContaPoupanca } from "./src/model/contaPoupanca";

const conta1 = new Conta(1, "Alceu Junior", 1000);
const conta2 = new Conta(2, "Mariana Isabel", 2000);
const contaCorrente = new ContaCorrente(3, "Juliana", 3000, 10000);
const contaPoupanca = new ContaPoupanca(4, "Julio", 2500, 10);
const contas: Conta[] = [conta1, conta2, contaCorrente, contaPoupanca];

//const contas: Conta[] = []; //Array que guarda as contas2

//let proximoNumeroConta = 1;

export function main() {
    let opcao: number;

    while (true) {
        console.log(colors.fg.greenstrong + "-------------------------------------------------------------------------------");
        console.log("                                                                               ");
        console.log(colors.fg.greenstrong + "                                  LUIXBANK                                     ");
        console.log("                                                                               ");
        console.log(colors.fg.greenstrong + "-------------------------------------------------------------------------------");
        console.log("                                                                               ");
        console.log(`${colors.reset}                            1 - Criar conta                     `);
        console.log("                            2 - Listar todas as contas                         ");
        console.log("                            3 - Consultar dados da Conta - por numero          ");
        console.log("                            4 - Atualizar dados da conta                       ");
        console.log("                            5 - Apagar uma conta                               ");
        console.log("                            6 - Saque                                          ");
        console.log("                            7 - Deposito                                       ");
        console.log("                            8 - Transferência entre contas                     ");
        console.log(`                            9 - Sair${colors.reset}                            `);
        console.log("                                                                               ");
        console.log(colors.fg.greenstrong + "-------------------------------------------------------------------------------");
        console.log("                                                                               ");

        console.log(colors.fg.greenstrong + "Opção escolhida: " + colors.reset);
        opcao = ler.questionInt("");

        if (opcao == 9) {
            //console.log("\n LUIXBANK - Seu dinheiro em boas mãos... as nossas!");
            console.log(`${colors.fg.greenstrong}\nLUIXBANK - Seu dinheiro em boas mãos... as nossas!${colors.reset}`);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar conta\n\n");
                break;

            case 2:
                console.log(colors.fg.green + "-------------------------------------------------------------------------------");
                console.log("\n\nListar todas as contas\n");
                contas.forEach((conta) => conta.listar());
                console.log(colors.fg.green + "-------------------------------------------------------------------------------");
                break;

            case 3:
                console.log("\n\nConsultar dados da conta - por número\n\n");

                const numeroConsulta = ler.questionInt("Informe o número da conta: ");
                const contaConsulta = contas.find(conta => conta.getNumero() === numeroConsulta);

                if (contaConsulta) {
                    contaConsulta.listar();
                } else {
                    console.log("Conta não encontrada.");
                }
                break;

            case 4:
                console.log("\n\nAtualizar dados da conta\n\n");
                break;

            case 5:
                console.log("\n\nApagar uma conta\n\n");
                break;

            case 6:
                console.log("\n\nSaque\n");
                const numeroSaque = ler.questionInt("Número da conta: ");
                const valorSaque = ler.questionFloat("Valor para saque: ");
                const contaSaque = contas.find((conta) => conta.getNumero() === numeroSaque);

                if (contaSaque) {
                    if (contaSaque.sacar(valorSaque)) {
                        console.log("Saque realizado com sucesso!");
                        console.log(`Saldo atual: R$ ${contaSaque.getSaldo().toFixed(2)}`);
                    }
                }
                break;

            case 7:
                console.log("\n\nDeposito\n");

                const numeroDeposito = ler.questionInt("Número da conta: ");
                const valorDeposito = ler.questionFloat("Valor para deposito: ");
                const contaDeposito = contas.find((conta) => conta.getNumero() === numeroDeposito);

                if (contaDeposito) {
                    contaDeposito.depositar(valorDeposito);
                    console.log(`Saldo atual: R$ ${contaDeposito.getSaldo().toFixed(2)}`);
                    console.log("Deposito realizado com sucesso!");
                } else {
                    console.log("Conta nao encontrada.");
                }
                break;

            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                const numeroOrigem = ler.questionInt("Número da conta de origem: ");
                const numeroDestino = ler.questionInt("Número da conta de destino: ");
                const valorTransferencia = ler.questionFloat("Valor para transferência: ");

                const contaOrigem = contas.find(conta => conta.getNumero() === numeroOrigem);
                const contaDestino = contas.find(conta => conta.getNumero() === numeroDestino);

                if (!contaOrigem || !contaDestino) {
                    console.log("Conta de origem ou destino não encontrada.");
                    break;
                }

                if (contaOrigem.sacar(valorTransferencia)) {
                    contaDestino.depositar(valorTransferencia);
                    console.log("Transferência realizada com sucesso!");
                    console.log(`Saldo da conta ${contaOrigem.getNumero()}: R$ ${contaOrigem.getSaldo().toFixed(2)}`);
                    console.log(`Saldo da conta ${contaDestino.getNumero()}: R$ ${contaDestino.getSaldo().toFixed(2)}`);
                }

                break;

            case 9: //Usuario sai
                console.log("Finalizando...");
                console.log("Programa Finalidado. Voce saiu do programa.");
                break;

            default:
                console.log("Opcao invalida. Tente novamente.");
                break;

        }

    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Luis Bispo");
    console.log("Linkedin - linkedin.com/in/luis-henrique-bispo/");
    console.log("GitHub - github.com/LuisHenriBispo");
    console.log("*****************************************************");
}

main();