import { FormControl, FormLabel, Input } from "@chakra-ui/react"




export const FormLogin = () => {
    return(
        <>
            <FormControl>
                
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='email' />
                
                <FormLabel marginTop='15px'>Password</FormLabel>
                <Input type='password' placeholder='password' />
             

            </FormControl>
        </>
    )
}