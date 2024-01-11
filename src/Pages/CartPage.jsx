
import { AspectRatio, Badge, Box, Button, Center, Divider, Flex, Heading, Image, Input, InputGroup, Text, useColorModeValue, } from '@chakra-ui/react';

import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, getCartServerdata, } from '../redux/CartReducer/action';
import CartItem from '../component/CartComponet/CartItem';

import emptyCartGif from '../Assets/emptyCartImg2.gif';
import { SearchContext } from '../context/SearchContextProvider';
import ProductPage from './ProductPage';
import Footer from '../component/HomeComponent/Footer';
import axios from '../utils/axios';

const CartPage = () => {
  const dispatch = useDispatch();
  const { status } = useContext(SearchContext);
  const [promo, setPromo] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(false);
  const [promoStatus, setPromoStatus] = useState(false);
  // let [totalPrice, setTotalPrice] = useState(0);
  const promoCodeData = JSON.parse(localStorage.getItem('promo')) || '';

  let { cart } = useSelector(store => store.cartReducer);
  const promoCode = 'GETFIRSTBUY10';
  const [toggle, setToggle] = useState(false);
  let id = JSON.parse(localStorage.getItem('userId')) || '';
  const user = JSON.parse(localStorage.getItem('user')) || '';

  let totalPrice = 0;
  // let val = 0;
  cart.forEach((cartItem) => {
    totalPrice += cartItem.gia * cartItem.quantity;
  })

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  const handlePromoCode = () => {
    if (promo === promoCode) {
      setAppliedPromo(true);
      localStorage.setItem('promo', JSON.stringify(promoCode));
      totalPrice -= totalPrice*0.1;
      setPromoStatus(true);
    }
  }
  
  const text = useColorModeValue('black', 'dark');
  const bg = useColorModeValue('white', 'gray.800');

  const cartData = useSelector(store => store.cartReducer.cart);
  const handlePromoToggle = () => {
    localStorage.setItem('promo', JSON.stringify(''));
    setAppliedPromo(false);
    setPromoStatus(false);
  }

  const createOrder = () =>{

    axios.post('order/create',{
      customerCode: id,
      name: user['name'],
      phoneNumber: user['phoneNumber'],
      discount: 0,
      address: user['address']
    })
    .then(result=>{
      console.log(result.data)
      localStorage.setItem('cart','[]')
    })
    .catch(error=>{
      console.log(error);
    })
  }


  return (
    status ? <ProductPage /> :
    <>
      <Box bgColor={bg} justifyContent={{base:'center',md:'center',lg:'flex'}}  display={"flex"} flexDirection={{ base: 'column', sm: cart.length>0 && "row", md: "column", lg: cart.length>0 && 'row' }}  paddingTop={"20px"} p={'6% 3%'}>

        <Flex width={{base:'100%',sm:'90%',md: '100%'}} justifyContent={'center'} direction={'column'}  mt={{base:'50px',md:'20px',lg:'10px'}} >
          <Center color={text} fontWeight={'bold'} fontSize={'24px'} pt={{base:'40px',md:''}}>Giỏ hàng</Center>
          <Divider />
          {cart.length > 0 ? (

            <CartList />

          ) : (
            <Flex direction='column' justifyContent='center' >
            <Image src={emptyCartGif} />
           
            </Flex>
          )}
        </Flex>
        <Box color={'white'} display={cartData.length === 0 ? 'none' : 'block'} width={{ base: "100%", sm: '100%', md: '90%', lg: 'sm', xl: 'lg' }} m="auto" pt={"50px"}>
          {promoCodeData && <Box  color={'gray.600'} my={'20px'} w={'100%'} display={'flex'} justifyContent={'space-between'}>
            <Text>Promocode <Button onClick={handlePromoToggle} size={'sm'} fontSize={'14px'} colorScheme='red'>X</Button></Text>
            <Badge colorScheme='green'>{promoCode} applied</Badge>
            </Box>}

          <Box display={"flex"} justifyContent={"space-between"} margin={"20px"}>
            <Text color={text}>Tổng sản phẩm</Text>
            <Text color={text}> {totalPrice} {' VNĐ'}</Text>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} margin={"20px"}>
            <Text color={text}>Giảm giá</Text>
            <Text color={text}>{totalPrice > 0 && promoCodeData ? (totalPrice*0.1).toFixed(2) : 0} {' VNĐ'}</Text>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} margin={"20px"}>
            <Text color={text}>Tổng tiền</Text>
            <Text color={text}> {totalPrice + ' VNĐ'}</Text>
          </Box>

          <Button _hover={'gray.500'} display={'block'} margin={"auto"} width={"100%"} bgColor={"blackAlpha.900"} color={"white"} onClick={createOrder}>Đặt hàng</Button>
        </Box>

      </Box>
      <Footer />
      </>
  );
};
export default CartPage;// nothing here yet


//----------------------------------------------------------------------------------------------------------------------

// cart list data shoing here
export const CartList = () => {

  const { cart } = useSelector(store => store.cartReducer);
  return (

    <Box mr={'50px'} maxH={'400px'} overflowY={'scroll'} className="cart-list-container"  >

      {cart.length > 0 && cart.map((el) => {
        const product = el;
        return <CartItem key={product.ma} {...product} />
      })}

    </Box>
);
};