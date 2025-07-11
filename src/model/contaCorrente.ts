import { Conta } from "./Conta";

export class ContaCorrente extends Conta{

    private _limiteConta: number;

    constructor(numeroConta: number,titular: string, saldo: number, limite: number){
        super(numeroConta, titular, saldo);
        this._limiteConta = limite;
    }

    public get limiteConta(): number {
        return this._limiteConta;
    }
    public set limiteConta(limite: number) {
        this._limiteConta = limite;
    }   


    public listar(): void{
        super.listar();
        console.log("Limite: " + this._limiteConta.toFixed(2));
    }

    
}