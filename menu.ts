import ler = require("readline-sync");
import { colors } from "./src/util/colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

// const conta1 = new Conta(1, "Alceu Junior", 1000);
// const conta2 = new Conta(2, "Mariana Isabel", 2000);
const contaCorrente = new ContaCorrente(3, "Juliana", 3000, 10000);
const contaPoupanca = new ContaPoupanca(4, "Julio", 2500, 10);
//const contas: Conta[] = [conta1, conta2, contaCorrente, contaPoupanca];
const contas: Conta[] = [contaCorrente, contaPoupanca];

//const contas: Conta[] = []; //Array que guarda as contas2

//let proximoNumeroConta = 1;

export function main() {
    let controller : ContaController = new ContaController();

    controller.cadastrar(contaCorrente);
    controller.cadastrar(contaPoupanca);

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

                const tipoConta = ler.questionInt("Digite o tipo de conta (1 - Corrente, 2 - Poupança): ");
                const nomeTitular = ler.question("Nome do titular: ");
                const saldoInicial = ler.questionFloat("Saldo inicial: ");

                let novaConta: Conta;

                if (tipoConta === 1) {
                    const limite = ler.questionFloat("Informe o limite: ");
                    novaConta = new ContaCorrente(5, nomeTitular, saldoInicial, limite);
                } else if (tipoConta === 2) {
                    const aniversario = ler.questionInt("Informe o dia do aniversário da poupança: ");
                    novaConta = new ContaPoupanca(5, nomeTitular, saldoInicial, aniversario);
                } else {
                    console.log("Tipo de conta inválido!");
                    break;
                }

                controller.cadastrar(novaConta);
                console.log("Conta criada com sucesso!");
                break;

            case 2:
                console.log(colors.fg.green + "-------------------------------------------------------------------------------");
                console.log("\n\nListar todas as contas\n");
                controller.listarContas();
                console.log(colors.fg.green + "-------------------------------------------------------------------------------");
                break;

            case 3:
                console.log("\n\nConsultar dados da conta - por número\n\n");

                const numeroConsulta = ler.questionInt("Informe o número da conta: ");

                const contaConsulta = controller.procurarPorNumero(numeroConsulta);
                if (contaConsulta) contaConsulta.listar();
                else console.log("Conta não encontrada.");
                break;

            case 4:
                console.log("\n\nAtualizar dados da conta\n\n");
                const numeroAtualizar = ler.questionInt("Informe o número da conta: ");
                const contaAtualizar = controller.procurarPorNumero(numeroAtualizar);

                if (contaAtualizar) {
                    const novoNome = ler.question("Novo nome do titular: ");
                    contaAtualizar.setTitular(novoNome);
                    controller.atualizar(contaAtualizar);
                    console.log("Dados atualizados com sucesso.");
                } else {
                    console.log("Conta não encontrada.");
                }
                break;

            case 5:
                console.log("\n\nApagar uma conta\n\n");
                const numeroExcluir = ler.questionInt("Informe o número da conta a ser excluída: ");
                controller.deletar(numeroExcluir);
                break;

            case 6:
                console.log("\n\nSaque\n");
                const numeroSaque = ler.questionInt("Número da conta: ");
                const valorSaque = ler.questionFloat("Valor para saque: ");
                controller.sacar(numeroSaque, valorSaque);
                break;

            case 7:
                console.log("\n\nDeposito\n");

                const numeroDeposito = ler.questionInt("Número da conta: ");
                const valorDeposito = ler.questionFloat("Valor para deposito: ");
                controller.depositar(numeroDeposito, valorDeposito);
                break;

            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                const numeroOrigem = ler.questionInt("Número da conta de origem: ");
                const numeroDestino = ler.questionInt("Número da conta de destino: ");
                const valorTransferencia = ler.questionFloat("Valor para transferência: ");
                controller.transferir(numeroOrigem, numeroDestino, valorTransferencia);

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