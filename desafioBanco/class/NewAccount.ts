import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount{


    deposit = (amount: number):void=>{
        console.log('Deposito realizado com sucesso')
        this.balance += amount + 10
    }
}