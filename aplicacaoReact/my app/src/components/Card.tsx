import { Box, Button, ChakraProvider, Heading } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"
import { FormLogin } from "./FormLogin"
import { login } from "../services/login";





export const Card = () => {
    return (
        <>
            <ChakraProvider>
                <Box background='purple.800' minHeight='100vh'  >

                    <Box maxW="400px" mx="auto" p="60px"  shadow="md" borderRadius='5px' background='purple.600'
                    position='absolute' marginTop='10px' top='50' left='40%'>
                        <Heading size="xl" textAlign="center">
                            <Header title={"Faça o login"}></Header>
                        </Heading>
                            <FormLogin />
                        <Box mt="4">
                            <Footer titleLogin={"Login"}></Footer>
                        </Box>
                    </Box>
                </Box>
                
                
                
                
                
                
                
                
                {/* <Box minHeight='100vh'  background='purple.600'>
                    <Header />
                    <FormLogin/>
                    <Footer />
                </Box> */}
            </ChakraProvider>
        </>
    )
}