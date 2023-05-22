import { Box, Button, ChakraProvider, Heading } from "@chakra-ui/react"






export const Card = ({children}: any) => {
    return (
        <>
                <Box background='purple.800' minHeight='100vh'  >
                    {children} 
                </Box>
        </>
    )
}