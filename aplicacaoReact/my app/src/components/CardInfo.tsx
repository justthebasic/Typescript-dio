import { Box, Text} from "@chakra-ui/react"

interface IcardInfo {
    mainContent: string;
    content: string;
}

export const CardInfo = ({mainContent,content}:IcardInfo) => {
    return(
        <Box backgroundColor='white' 
        minHeight='120px' padding={8} borderRadius={5}>
            <Text fontSize='2xl' fontWeight='bold'>
                {mainContent}
            </Text>
            <Text fontSize='xl'>
                {content}
            </Text>
            
        </Box>
    )
}