import { Conta } from "../model/Conta";

export interface ContaRepository {
    //CRUD
    procurarPorNumero(numeroConta: number): void;
    listarContas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numeroConta: number): void;
    
    //METODOS
    sacar(numeroConta: number, valor: number): void;
    depositar(numeroConta: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valorTransferencia:number): void;
}