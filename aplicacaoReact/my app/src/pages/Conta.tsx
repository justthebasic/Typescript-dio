import { Box,Text, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { CardInfo } from "../components/CardInfo"
import { useState, useEffect } from "react"
import { api } from "../api"


interface FormLoginProps{
    titleLogin: string;
    gmail:string;
    password:string;
    name:string;
    balance: number;
    id: string;

}

export const Conta = () => {
    const [userData, setUserData] = useState<null | FormLoginProps>()

    

    useEffect(() => {
        const getData = async () => {
        const data:any |FormLoginProps= await api
        setUserData(data)
        }

        getData()
    }, [])    

    console.log(userData)

    const actualDate = new Date()
    
    const {id} = useParams()
    const navigate = useNavigate()

    if(userData && id !== userData.id){
        navigate('/')
    }


    return(
        <>
        
            <Box>
                <Link to='/'>
                    <Text fontSize='3xl' fontWeight='bold'>
                        Login
                    </Text>
                </Link>
                <Link to='/containfo'>
                    <Text fontSize='3xl' fontWeight='bold'>
                        Informações da conta
                    </Text>
                </Link>
                
            </Box>
            <Center>
                <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                    {
                        userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner size='lg' color="black"/>
                            </Center>
                        ) :
                        (
                            <>
                                <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualDate.getDay()} / ${actualDate.getMonth()} / ${actualDate.getFullYear()} ${actualDate.getHours()} horas `} />
                                <CardInfo mainContent={`Saldo`} content={`R$ ${userData.balance}`} />
                            </>
                        )
                    }
                    
                    
                </SimpleGrid>
            </Center>
        </>
    )
}

