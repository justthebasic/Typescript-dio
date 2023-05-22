
import { Login } from "./login"

const mockedSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () =>({
        setIsLoggedIn: mockedSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate,
}))


describe('Login', ()=>{

    const mockEmail = 'ericklama@dio.me'

    
    
    it('Deve exibir um alert com boas vindas caso o email seja válido', async () =>{
        await Login(mockEmail)
        expect(mockedSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await Login('email.invalido.com')
        expect(mockedSetIsLoggedIn).not.toHaveBeenCalledWith()
        
    })
})