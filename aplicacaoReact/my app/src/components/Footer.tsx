import { Button, Center } from "@chakra-ui/react"
import { login } from "../services/login"

interface FooterProps{
  titleLogin: string;
}

export const Footer = ({titleLogin}: FooterProps) => {
    return(
        <div>
            <Center>
              <Button onClick={login} colorScheme='teal' size='md' margin='25px 5px 10px 5px' width='100%' >
                {titleLogin}
              </Button>
        </Center>
        </div>
    )
}