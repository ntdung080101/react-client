
import React, { useContext, useState } from 'react';
import {
  Stack,
  Text,
  Image,
  Flex,
  Button,
  useColorModeValue,
  Box,
  useToast,
} from '@chakra-ui/react';
import { VscHeart } from 'react-icons/vsc';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCartServerdata,
  postSingleProductItem,
} from '../../redux/CartReducer/action';
import {SERVER_URL} from '../../constraint';
import { SearchContext } from '../../context/SearchContextProvider';
export const ProductCard = ({
  ma,
  ten,
  imagePath,
  gia,
  mo_ta,
  review,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const products = useSelector(store => store.productReducer.products);
  const [state, setState] = useState(false);
  const [rating, setRating] = useState(5);
  const {setStatus} = useContext(SearchContext);

  const handleAdd = () => {
    let d = products.find(el => el.ma === ma);
    dispatch(postSingleProductItem({...d, quantity : 1})).then(res => {
      toast({
        title: 'Ok!!',
        description: 'Thêm sản phẩm thành công',
        status: 'success',
        duration: 4000,
        position: 'top',
        isClosable: true,
      });
      setState(true);
    });
  };

  return (
    <Flex direction={'column'} pos={'relative'} borderRadius={'12px'} bgColor={useColorModeValue('white', 'gray.800')} boxShadow={'1px 1px 10px'} padding={'5px'}
      _hover={{boxShadow: '5px 5px 10px', transition: '.3s'}}
    >
      <Box p="20px" bg={useColorModeValue('#cc3a3a', 'gray.800')} boxSizing="borderBox" borderRadius={'9PX'} >
        <Box
          className="bestdeal"
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
        >
          <Image
            src={`${SERVER_URL}${imagePath[0]}`}
            alt="image"
            height={'220px'}
            width={'260px'}
            onClick={() => navigate(`/products/${ma}`)}
          />
        </Box>
      </Box>

      <Stack px="5px">
        <Text
          fontWeight={'bold'}
          fontSize={'18px'}
          fontFamily={'sans-serif'}
          pt={'10px'}
        >
          {ten.length < 20 ? ten : ten.substring(0, 20)}...
        </Text>
        <Flex justifyContent={'space-between'}>
          <Flex>
            <Text fontWeight={'bold'} fontSize={'18px'} mt={'2px'} pt={'0px'} color={'#ff4318'}>
              {gia + '00 VNĐ'}
            </Text>
          </Flex>

        </Flex>
        <Text fontSize={'14px'} opacity="80%">
          {mo_ta.substring(0, 30)}...
        </Text>
        <Flex>
          <Text color={'yellow'} fontSize={'19px'}>
            {rating >= 0 && rating <= 1.5
              ? '★☆☆☆☆'
              : rating >= 1.6 && rating <= 2.5
              ? '★★☆☆☆'
              : rating >= 2.6 && rating <= 3.5
              ? '★★★☆☆'
              : rating >= 3.6 && rating <= 4.5
              ? '★★★★☆'
              : '★★★★★'}
          </Text>
          <Text opacity={'90%'}>({review})</Text>
        </Flex>
        {!state ? (
          <Button
            variant={'unstyled'}
            border={'1px solid black'}
            w="120px"
            borderRadius={'40px'}
            _hover={{
              backgroundColor: 'green',
              color: 'white',
            }}
            onClick={handleAdd}
          >
            Thêm vào giỏ
          </Button>
        ) : (
          <Button
            variant={'unstyled'}
            border={'1px solid black'}
            w="120px"
            borderRadius={'40px'}
            _hover={{
              backgroundColor: 'gray.700',
              color: 'white',
            }}
            onClick={() => {
              setStatus(false);
              navigate('/cart')
            }}
          >
            Go To Cart
          </Button>
        )}
      </Stack>
      
      <Button
        p="10px"
        bg="white"
        borderRadius={'50%'}
        pos={'absolute'}
        right={'11px'}
        top="15px"
        _hover={{ bg: 'pink.100' }}
        color={useColorModeValue('light', 'gray.700')}
      >
        <VscHeart style={{ width: '20px', height: '20px' }} />
      </Button>
    </Flex>
  );
};
