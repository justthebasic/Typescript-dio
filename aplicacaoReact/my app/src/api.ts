const conta = {
    email: 'erick.dio.bank',
    password:'1234',
    name:'Erick Cardoso'
}

export const api = new Promise((resolve) =>{
    setTimeout(()=> {
        resolve(conta)
    }, 3000)
})