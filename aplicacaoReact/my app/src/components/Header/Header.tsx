import { Center } from '@chakra-ui/react'
import './Header.css'

interface HeaderProps{
    title: string;
}

export const Header = ({title}: HeaderProps) => {
    return (
        <div className='header'>
            <Center p='30px' fontSize='24px'>
                <h1>{title}</h1>
            </Center>
        </div>
    )
}