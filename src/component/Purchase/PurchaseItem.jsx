import { Box, Divider, Flex, Image, Select, Text } from "@chakra-ui/react";
import { SERVER_URL } from "../../constraint";

const PurchaseItem = ({  ma,
    ten,
    loai,
    imagePath,
    gia,
    color,
    quantity,}) => {

    return <>
    <Box width={'100%'} margin={'10px 0'} padding={'0 10px'} borderRadius={'10px'}>

        <Box display={'flex'} flexDirection={{ base: "column", md: "row" }} alignItems={'center'} justifyContent={{ base: 'center', md: "space-between" }} gap={'20px'}>

        <Flex justifyContent={{base:'space-between'}} gap={{base:'30px'}}>
        <Image width={{ base: "160px", sm: '200px', md: '100px', lg: '150px', xl: '200px' }} src={`${SERVER_URL}${imagePath[0]}`} alt={ten} />
        <Box className='TitleColorBrand' display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Text fontWeight={'bold'} fontSize={'20px'}>{ten.substring(0,15)}...</Text>
            <Text fontWeight={'bold'} color={'orange.400'}>Hiệu: {loai}</Text>
            <Text fontWeight={'bold'} fontSize={'9px'}>Ngày mua: {'15/11/2023'}</Text>
        </Box>
        </Flex>

        <Box display={'block'} flexDirection={'row'} justifyContent={'center'} gap={'20px'} alignItems={'center'}>


            <Text fontWeight={'bold'} fontSize={'15px'}>{gia} {' VNĐ'}</Text>
        </Box>

        </Box>

        <Box className='actions' display={'flex'} flexDirection='row' justifyContent={{base:'space-evenly',md:'flex-end'}} alignItems={"center"}>
        </Box>
        <Divider />
        <Divider />
    </Box>
</>
}

export default PurchaseItem;