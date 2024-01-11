
import { AspectRatio, Badge, Box, Button, Center, Divider, Flex, Heading, Image, Input, InputGroup, Text, useColorModeValue, } from '@chakra-ui/react';

import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, getCartServerdata, } from '../redux/CartReducer/action';
import CartItem from '../component/CartComponet/CartItem';

import { Link, NavLink } from 'react-router-dom';
import emptyCartGif from '../Assets/emptyCartImg2.gif';
import { SearchContext } from '../context/SearchContextProvider';
import ProductPage from './ProductPage';
import Footer from '../component/HomeComponent/Footer';
import PurchaseItem from '../component/Purchase/PurchaseItem';
import axios from '../utils/axios';

const PurchasePage = () => {
    const [listOrder, setListOrder] = useState([]);
    const { cart } = useSelector(store => store.cartReducer);

    const [listPurchase, setListPurchase] = useState(['','','']);

    const text = useColorModeValue('black', 'dark');
    const bg = useColorModeValue('white', 'gray.800');

    useEffect(()=>{
      axios.get('order/list-order-of-me')
      .then(result=>{
        setListOrder(result.data.message);
      })
      .catch(error=>{
        console.log(error)
      })
    },[])

    return  <>
    <Box bgColor={bg} justifyContent={{base:'center',md:'center',lg:'flex'}}  display={"flex"} paddingTop={"20px"} p={'6% 3%'}>
      <Flex width={{base:'100%',sm:'90%',md: '100%'}} justifyContent={'center'} direction={'column'}  mt={{base:'50px',md:'20px',lg:'10px'}} >
        <Center color={text} fontWeight={'bold'} fontSize={'24px'} pt={{base:'40px',md:''}}>Theo dõi đơn hàng</Center>
        <Flex flexDirection={'row'} justifyContent={'space-around'} >
          <NavLink to='/purchase/0'><Text  color='red' borderBottom={'3px solid red'}>Chờ duyệt</Text></NavLink>
          <NavLink to='/purchase/1'><Text>Đang giao</Text></NavLink>
          <NavLink to='/purchase/2'><Text>Hoàn thành</Text></NavLink>
          <NavLink to='/purchase/3'><Text>Đã hủy</Text></NavLink>
        </Flex>
        <Divider />
        {
            listOrder.length > 0? listOrder.map(el=> <CartItemComponent orderId={el.ma} {...el}/> ):
            <Flex direction='column' justifyContent='center' >
                <Image src={emptyCartGif} />
            </Flex>
        }
      </Flex>
    </Box>
    <Footer />
    </>
};

const CartItemComponent = (props) => {
  const [listItem, setListItem] = useState([]);

  useEffect(()=>{
    axios.get('detail-order/list-all',{
      params: {
        orderCode: props.orderId
      }
    })
    .then(result=>{
      console.log(result.data.message);
    })
    .catch(error=>{
      console.log(error);
    })
  },[])

  return listItem.length > 0? listItem.map(el=>{
    return <PurchaseItem {...el}/>
  }) : <></>
}

export default PurchasePage;