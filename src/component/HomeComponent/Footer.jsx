
import { Box, Container, Link, SimpleGrid, Stack, Text, IconButton, useColorModeValue, HStack, Divider, Image, Center, Grid,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube,FaUser, FaFacebook, FaPinterest } from 'react-icons/fa';
export default function Footer() {
  const text = useColorModeValue('light','dark')
  const textColor = text==='dark'?'gray.100':'blackAlpha.900'
  return (
    <>
    <Box w={'100%'} borderTop="1px solid lightgray" mt='20px'>
    </Box>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')} border="0.2px solid lightgray" w="100%">
      <Container as={Stack} maxW={'8xl'} py={19} >
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1.5fr' }}
          spacing={2} py={18}>
          <Stack spacing={2}>
            <Text fontSize={16} fontWeight="bolder">Về chúng tôi</Text>
            <Link fontSize={14}>Thông tin cửa hàng</Link>
         
          </Stack>
          <Stack align={'flex-start'} borderLeft="1px solid lightgray" spacing={10}>
            
            <Stack direction={'column'} pl={5}>
              {/* forth orbit ========================= */}
            <Text fontSize={25} fontWeight={'bolder'}>Theo dỗi</Text>
            <Divider ></Divider>
            <HStack>
              <Link><IconButton borderRadius={'50%'} border={text === 'dark' ? "2px solid white" : "2px solid black"} variant={'outline'} color={textColor}  icon={<FaInstagram />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={text === 'dark' ? "2px solid white" : "2px solid black"} variant={'outline'} color={textColor} icon={<FaFacebook />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={text === 'dark' ? "2px solid white" : "2px solid black"} variant={'outline'} color="red"  icon={<FaYoutube />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={text === 'dark' ? "2px solid white" : "2px solid black"} variant={'outline'} color="blue.500"  icon={<FaTwitter />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={text === 'dark' ? "2px solid white" : "2px solid black"} variant={'outline'} color="brown.500"  icon={<FaPinterest />} /></Link>

            </HStack>
            </Stack> 
            <Divider  w="100%"/>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    </>
  );
}