import { Center } from '@chakra-ui/react'
import { useContext } from 'react';
import { AppContext } from '../AppContext';


interface HeaderProps{
    title: string;
}


export const Header = ({title}: HeaderProps) => {
    const context = useContext(AppContext)
    console.log('retonro do header', context)

    return (
        <>
            <Center p='30px' fontSize='24px'>
                <h1>{title}</h1>
            </Center>
        </>
    )
}