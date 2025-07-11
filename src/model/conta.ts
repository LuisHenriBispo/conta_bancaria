export abstract class Conta{
    private _numeroConta: number;
    
    private _titular: string;
    
    private _saldo: number;

    //CONSTRUTORES
    constructor(numeroConta: number,titular: string, saldo: number){
        this._numeroConta = numeroConta;
        this._titular = titular;
        this._saldo = saldo;
    }

    public listar():void{
        console.log(`\nConta: ${this._numeroConta}`);
        console.log(`\nTitular: ${this._titular}`);
        console.log(`\nSaldo: ${this._saldo.toFixed(2)}`);
    }

    public sacar(valor: number): boolean {
        if (valor > this._saldo) {
            console.log("Saldo insuficiente.");
            return false;
        }
        this._saldo -= valor;
        return true;
    }

    public getSaldo(): number {
        return this._saldo;
    }

    public setSaldo(valor: number): number {
        return this._saldo = valor;
    }

     public depositar(valor: number): void {
        this._saldo += valor;
    }

    public getNumero(): number {
        return this._numeroConta;
    }

    public getTitular(): string {
        return this._titular;
    }

    public setTitular(novoNome: string): void {
        this._titular = novoNome;
    }
}