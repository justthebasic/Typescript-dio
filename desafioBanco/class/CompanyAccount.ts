import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
        
    }
    
    getLoan = (amount:number): void =>{
        if(this.validateStatus()){
            console.log('Você pegou um emprestimo')
            this.balance += amount
        }else {
            console.log('Emprestimo inválido')
        }

    }


    deposit = (): void => {
        console.log('A empresa depositou')
    }
    
}