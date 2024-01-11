import {
  Box,
  Heading,
  Text,
  Flex,
  Img,
  Input,
  border,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import delivery from '../../Assets/delivery.svg';
import { useDispatch } from 'react-redux';
import { postSingleProductItem } from '../../redux/CartReducer/action';
import { useNavigate } from 'react-router-dom';

const NewRight = ({ spData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const roundedRating = Math.round(spData.rating);

  const handleAddToCart = () => {
    dispatch(postSingleProductItem({...spData,quantity:1})).then(res => navigate('/cart'));
  };

  const handleBuySingleProduct = () => {
    dispatch(postSingleProductItem({...spData,quantity:1})).then(res => navigate('/payment'));
  };

  return (
    <Box textAlign={'left'} margin={['5%', '5%', '10%', '10%']}>
      <Box>
        <Heading
          size="1000px"
          fontSize="xl"
          fontWeight={'extrabold'}
          fontFamily={'sans-serif'}
          color={'red'}
        >
          {spData.title}
        </Heading>

        <Text
          fontSize={'sm'}
          textAlign={'left'}
          opacity="70%"
          paddingY={'1.5%'}
        >
          {spData.description}
        </Text>
        {/* <Box display={'flex'} fontSize={'10px'}>
          {Array.from({ length: 5 }).map((_, index) => {
            const isFilled = index < roundedRating;
            return isFilled ? (
              <FaStar key={index} color="yellow" className="stroke-1 " />
            ) : (
              <FaRegStar key={index} color="gray" />
            );
          })}
        </Box> */}
      </Box>

      <Box paddingY={'1%'}>
        <Box display="flex" alignItems="center">
          <Box paddingRight={'3%'}>
            <Text fontSize={'xl'} display={'flex'}>
              Giá:{' '}
              <Text fontWeight={'semibold'} textDecoration={'line-through'} color={'gray'}>
                {spData.mrp}
              </Text>{' '}
            </Text>
          </Box>
        </Box>
        <Box fontWeight={'5px'}>
          <Heading display={'flex'}>
            {spData.gia}
            <Heading paddingRight={'2px'}>{spData.gia}{' VNĐ'}</Heading>
          </Heading>
        </Box>
      </Box>

      <Box>
        <Box
          spac
          paddingLeft={'2%'}
          marginY={'3%'}
          borderLeft={'3px solid #03fcd3'}
          fontSize={'md'}
          opacity={'70%'}
        >
          <Text>Loại sản phẩm:{ ' ' + spData.loai}</Text>
          <Text>Thông tin:{spData.mo_ta}</Text>
        </Box>
      </Box>

      <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
        <Button
          onClick={handleAddToCart}
          bg={'black'}
          textColor={'white'}
          fontSize={'17px'}
          width={'250px'}
          border={'2px solid black'}
          colorScheme='white'
        >
          Thêm vào giỏ
        </Button>
      </Box>
    </Box>
  );
};

export default NewRight;
