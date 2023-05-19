import { Box,Text, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export const ContaInfo = () => {
    return(
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>

            <Link to='/conta/1'>
                <Text fontSize='3xl' fontWeight='bold'>
                    Página da conta
                </Text>
            </Link>
        </>
    )
}