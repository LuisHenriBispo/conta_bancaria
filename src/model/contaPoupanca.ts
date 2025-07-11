import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

    private _aniversario: number;

    constructor(numeroConta: number,titular: string, saldo: number, aniversario: number){
        super(numeroConta, titular, saldo);
        this._aniversario = aniversario;
    }

    public get aniversario(): number {
        return this._aniversario;
    }
    public set aniversario(aniversario: number) {
        this._aniversario = aniversario;
    }
    
    public listar(): void{
        super.listar();
        console.log("Dia do aniversário: " + this._aniversario);
    }
    
}