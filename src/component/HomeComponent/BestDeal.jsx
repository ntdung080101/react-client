

import { Box, Button, Center, Flex, Grid, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaGrinHearts, FaHeart, FaHeartBroken, FaHeartbeat, FaKissWinkHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import axios from '../../utils/axios';
import { SERVER_URL } from '../../constraint';

const imageArr = [
  { image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61eb4ad4af6e75689_macbook%2013-min.png',text:'APPLE A715-42G-R2NE l', price:36000000, description:'Key Features 39.6cm (15.6\")',id:97,disc:53},
  { image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//News/1499078//laptop-15-800x450-1.jpg',text:'Lenovo thinkpad' , price:1650000, description:'Organic Cotton, fairtrade certified',id:48,disc:52},
  { image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png',text:'REDMI A1+ (Black  32 GB)', price:17500000 , description:'4 GB RAM | 64 GB ROM',id:147,disc:35},
  { image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WaveFlexConnectPackaging1.2_300x.png?v=1677645513',text:'Wave Select Smartwatch' , price:2600000, description:'1.78\" AMOLED Display',id:15,disc:75}
]



const BestDeal = () => {

  const [listProduct, setListProduct] = useState([]);
  const text = useColorModeValue('light','dark')
  const textColor = text==='dark'?'gray.100':'blackAlpha.900'

  useEffect(()=>{
    axios.get('product/list',{
      params:{
        page: 1,
        limit: 5,
      }
    })
    .then(result=>{
      setListProduct(result.data.message.data);
    })
    .catch(error=>{
      console.log(error);
    })
  },[]);

  return (
    <Box mt="20px">
      <Flex direction={'column'} px="3%" gap="50px">
      <Center>
      <Heading fontSize={{base:'25px',md:'32px'}}>
          Giá sốc
        </Heading>
      </Center>
        <Grid templateColumns={{ base: 'repeat(1,1fr)',sm:'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }} gap="20px" >

          {
            listProduct.map((el,ind) => (
              <Flex key={ind} direction={'column'} pos={'relative'} borderRadius={'12px'} >
                <Box p="20px" bg="red.50" boxSizing='borderBox' >
                  <Box className='bestdeal'>
                    <NavLink to={`/products/${el.ma}`}><Image src={`${SERVER_URL}${el.imagePath[0]}`} width={'303px'} height={'303px'}/></NavLink>
                  </Box>
                </Box>
                <Stack px="5px">
                <Text fontWeight={'bold'} fontSize={'18px'} color={textColor}>{el.ten}</Text>
                  <Flex gap="20px" color={text==='dark'?'white':'blackAlpha.900'}>                    
                    <Text fontWeight={'bold'} color={textColor} fontSize={'18px'}>{el.gia} {' VNĐ'}</Text>
                  </Flex>
                  <Text fontSize={'14px'} color={textColor}>{el.mo_ta}</Text>
                  <Flex>
                    <Text color={'green'} fontSize={'19px'}>&#9733;</Text>
                    <Text color={'green'} fontSize={'19px'}>&#9733;</Text>
                    <Text color={'green'} fontSize={'19px'}>&#9733;</Text>
                    <Text color={'green'} fontSize={'19px'}>&#9733;</Text>
                    <Text color={'green'} fontSize={'19px'}>&#9733;</Text>
                  </Flex>
                  <NavLink to={`/products/${el.ma}`}><Button variant={'unstyled'} border={'1px solid black'} w="120px" borderRadius={'40px'}>Xem chi tiết</Button></NavLink>
                </Stack>
                <Box p="10px" bg='white' borderRadius={'50%'} pos={'absolute'} right={'11px'} top="15px" _hover={{ bg: 'pink' }} >
                  <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9df775b939f51a0b22f6d_Icon.svg" w='20px' />
                </Box>
              </Flex>
            ))
          }
        </Grid>
      </Flex>
    </Box>
  )
}

export default BestDeal