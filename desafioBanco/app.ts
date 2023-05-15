import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount';





const personal = new PeopleAccount(1,'John Doe', 123);
const company = new CompanyAccount('ACME Corp', 456);
const bonus = new NewAccount('Jane Smith', 789);

personal.deposit(100);
personal.withdraw(50);
console.log('Saldo da conta pessoal:', personal.getBalance());

company.deposit();
company.getLoan(1000);
console.log('Saldo da conta da empresa:', company.getBalance());

bonus.deposit(200);
console.log('Saldo da conta bônus:', bonus.getBalance());



// const peopleAccount: PeopleAccount = new PeopleAccount(1,'Nath',10)
// console.log(peopleAccount)
// peopleAccount.deposit(100)

// const companyAccount: CompanyAccount = new CompanyAccount('Dio', 3, true)
// companyAccount.deposit()
