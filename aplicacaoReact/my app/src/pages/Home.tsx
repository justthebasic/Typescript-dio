import { Box, Heading } from '@chakra-ui/react'
import {Card} from '../components/Card'
import { FormLogin } from '../components/FormLogin'
import { Header } from '../components/Header/Header'

export const Home = () => {
    return(
        <Card>
            <Box maxW="400px" mx="auto" p="60px"  shadow="md" borderRadius='5px' 
            background='purple.600'position='absolute' marginTop='10px' top='50' left='40%'>
                 <Heading size="xl" textAlign="center">
                    <Header title={"Faça o login"}></Header>
                </Heading>
                <Box mt="4">
                    <FormLogin />
                </Box>
            </Box>
        </Card>
    )
}

