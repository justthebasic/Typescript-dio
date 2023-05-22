const conta = {
    email: 'erick@dio.bank',
    password:'1234',
    name:'Erick Cardoso',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) =>{
    setTimeout(()=> {
        resolve(conta)
    }, 3000)
})