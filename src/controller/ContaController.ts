import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = [];
    private proximoNumero: number = 1;

    public listarContas(): void {
        for (let conta of this.listaContas) {
            conta.listar();
        }
    }

    public cadastrar(conta: Conta): void {
        conta.setNumero(this.proximoNumero++);
        this.listaContas.push(conta);
    }

    public procurarPorNumero(numero: number): Conta | undefined {
        return this.listaContas.find(conta => conta.getNumero() === numero);
    }

    public atualizar(contaAtualizada: Conta): void {
        const index = this.listaContas.findIndex(c => c.getNumero() === contaAtualizada.getNumero());
        if (index !== -1) {
            this.listaContas[index] = contaAtualizada;
        } else {
            console.log("Conta não encontrada para atualização.");
        }
    }

    public deletar(numeroConta: number): void {
        const index = this.listaContas.findIndex(c => c.getNumero() === numeroConta);
        if (index !== -1) {
            this.listaContas.splice(index, 1);
            console.log("Conta deletada com sucesso.");
        } else {
            console.log("Conta não encontrada para exclusão.");
        }
    }

    public sacar(numeroConta: number, valor: number): void {
        const conta = this.procurarPorNumero(numeroConta);
        if (conta) {
            if (conta.sacar(valor)) {
                console.log("Saque realizado com sucesso.");
            }
        } else {
            console.log("Conta não encontrada.");
        }
    }

    public depositar(numeroConta: number, valor: number): void {
        const conta = this.procurarPorNumero(numeroConta);
        if (conta) {
            conta.depositar(valor);
            console.log("Depósito realizado com sucesso.");
        } else {
            console.log("Conta não encontrada.");
        }
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valorTransferencia: number): void {
        const origem = this.procurarPorNumero(numeroOrigem);
        const destino = this.procurarPorNumero(numeroDestino);

        if (!origem || !destino) {
            console.log("Conta de origem ou destino não encontrada.");
            return;
        }

        if (origem.sacar(valorTransferencia)) {
            destino.depositar(valorTransferencia);
            console.log("Transferência realizada com sucesso.");
        }
    }
}
