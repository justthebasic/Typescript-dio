export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    protected balance: number = 0
    private status: boolean = true

    constructor(name:string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    private getName = (): string => {
        return this.name;
      }
    

    deposit = (amount: number):void => {
        if(this.validateStatus()){
            console.log('você depositou')
            this.balance += amount
        }
    }

    withdraw = (amount: number):void =>{
        if(this.validateStatus() && this.balance >= amount){
            this.balance -= amount;
            console.log('Você sacou')
        }else{
            console.log('Saldo insuficiente')
        }
    }

    public getBalance = ():number => {
        return this.balance
    }

    protected validateStatus = (): boolean=>{
        if(this.status){
            return this.status
        }
        throw new Error('Conta inválida')
    }
   
}

