import { Conta } from "../model/Conta";

export interface ContaRepository {
    //CRUD
    numeroConsulta(numero: number): void;
    listarContas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;
    
    //METODOS
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valorTransferencia:number): void;
}