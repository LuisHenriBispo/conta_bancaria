import ler = require("readline-sync");
import {colors} from "./src/util/colors";

export function main() {
    let opcao: number;

    while (true) {
        console.log(colors.fg.greenstrong + "-------------------------------------------------------------------------------");
        console.log("                                                                               ");
        console.log(colors.fg.greenstrong + "                                  LUIXBANK                                     ");
        console.log("                                                                               ");
        console.log( colors.fg.greenstrong +"-------------------------------------------------------------------------------");
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
        console.log(colors.fg.greenstrong +"-------------------------------------------------------------------------------");
        console.log("                                                                               ");

        console.log(colors.fg.greenstrong +"Opção escolhida: "+ colors.reset);
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
                console.log("\n\nListar todas as contas\n\n");
                break;

            case 3:
                console.log("\n\nConsultar dados da conta - por número\n\n");
                break;

            case 4:
                console.log("\n\nAtualizar dados da conta\n\n");
                break;

            case 5:
                console.log("\n\nApagar uma conta\n\n");
                break;

            case 6:
                console.log("\n\nSaque\n\n");
                break;

            case 7:
                console.log("\n\nDeposito\n\n");
                break;

            case 8:
                console.log("\n\nTransferência entre Ccntas\n\n");
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