import { Button, Center, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { Login } from "../services/login";
import { api } from "../api";





export const FormLogin = () => {

    const [email, setEmail] = useState<string>('')
    

    return(
        <>
            <FormControl>
                
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                
                <FormLabel marginTop='15px'>Password</FormLabel>
                <Input type='password' placeholder='password' />
                <Center>
                    <Button onClick={() => Login(email)} colorScheme='teal' size='md' margin='25px 5px 10px 5px' width='100%' >
                        Login
                    </Button>
                </Center>
            </FormControl>
        </>
    )
}