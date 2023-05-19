import { Button, Center, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { login } from "../services/login";
import { api } from "../api";


interface FormLoginProps{
    titleLogin: string;
    gmail:string;
    password:string;
    name:string;
}


export const FormLogin = ({titleLogin, gmail,password,name}: FormLoginProps) => {

    const [email, setEmail] = useState<string>('')
    const [userData, setUserData] = useState<null | FormLoginProps>()

    useEffect(() => {
        const getData = async () => {
            const data:any |FormLoginProps= await api
            setUserData(data)
        }
        getData()
    })    

    console.log(userData)

    return(
        <>
            <FormControl>
                {userData === null || userData === undefined ?
                 <h1>Loading...</h1>: 
                 <h1>Informações carregadas</h1>}
                {/* <Center><h1>{userData?.name}</h1></Center> */}
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                
                <FormLabel marginTop='15px'>Password</FormLabel>
                <Input type='password' placeholder='password' />
                <Center>
                    <Button onClick={() => login(email)} colorScheme='teal' size='md' margin='25px 5px 10px 5px' width='100%' >
                        {titleLogin}
                    </Button>
                </Center>
            </FormControl>
        </>
    )
}