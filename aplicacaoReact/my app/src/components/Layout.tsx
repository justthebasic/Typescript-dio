
import { Header } from "./Header/Header"
import { Box } from "@chakra-ui/react"

export const Layout = ({children}: any) => {
    return(
        <>
            <Box minHeight='100vh' background='purple.800'>
                <Header title={""} />
                {children}
            </Box>
        </>
    )
}