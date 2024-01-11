
import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Image,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import loginImg from '../Assets/loginImg.avif';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESSFUL } from '../redux/Authentication/actionType';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginData } from '../redux/Authentication/action';
import Loader from '../component/Loader&Error/Loader';
import Footer from '../component/HomeComponent/Footer';
import axios from '../utils/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const dispatch = useDispatch();
  // const auth = useSelector(store => store.authReducer.isAuth);
  const loader = useSelector(store => store.authReducer.isLoading);
  // const data = useSelector(store => store.authReducer.users);
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: 'Không thành công',
        description: "Vui lòng điền vào chổ trống!",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
      return;
    }

    axios.post('auth/login-customer',{
      userName: email,
      password,
    })
    .then(result=>{
      localStorage.setItem('authToken',result.data.message.token);
      const customerCode = result.data.message.id;
      toast({
        title: 'Đăng nhập thành công!',
        description: "Redirecting to Home Page.",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })

      axios.get('customer/get',{
        params: {
          code: customerCode,
        }
      })
      .then(res=>{
        const data = res.data.message;

        console.log(res.data)
        localStorage.setItem('userId', JSON.stringify(data.ma))
        localStorage.setItem('auth', JSON.stringify(true));
        localStorage.setItem('user', JSON.stringify({
          id: data.id,
          address: data.dia_chi,
          image: data.hinh_anh,
          phoneNumber: data.so_dien_thoai,
          name: data.ten
        }));

        setTimeout(() => {
          navigate('/');
        }, 3000)
      })
      .catch(err=>{
        toast({
          title: 'Đăng nhập thất bại',
          description: "Tài khoản không tồn tại hoặc sai mật khẩu",
          status: 'warning',
          duration: 3000,
          isClosable: true,
          position: 'top'
        })
      })
      
    })
    .catch(error=>{
        toast({
          title: 'Đăng nhập thất bại',
          description: "Tài khoản không tồn tại hoặc sai mật khẩu",
          status: 'warning',
          duration: 3000,
          isClosable: true,
          position: 'top'
        })
    })

    // if (newData) {
    //   if (newData.password === password) {

    //     newData.pic ='https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg';
    //     newData.lastName = 'John';
    //     newData.firstName = 'Leo';
    //     localStorage.setItem('userId', JSON.stringify(newData.id))
    //     localStorage.setItem('auth', JSON.stringify(true));
    //     localStorage.setItem('user', JSON.stringify(newData));
    //     setTimeout(() => {
    //       navigate('/');
    //     }, 3000)
    //     return;
    //   } else {
    //     toast({
    //       title: 'Đăng nhập thất bại',
    //       description: "Sai mật khẩu",
    //       status: 'warning',
    //       duration: 3000,
    //       isClosable: true,
    //       position: 'top'
    //     })
    //     return;
    //   }
    // } else {
    //   toast({
    //     title: 'Sai chứng thực',
    //     description: "Make Sure you are registered.",
    //     status: 'error',
    //     duration: 3000,
    //     isClosable: true,
    //     position: 'top'
    //   })
    //   return;
    // }

  }


  return (
    loader ? <Loader /> :
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        pt={'60px'}
        justify={'center'}
        direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Đăng nhập tài khoản</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Quên mật khẩu?</Link>
                  </Stack>
                  <Button
                    bg={'black'}
                    color={'white'}
                    type='submit'
                    _hover={{
                      bg: 'gray.700',
                    }}>
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </form>
            <Flex w='90%' mt='20px' justifyContent='center'>
              <Text>New here?</Text>
              <NavLink style={{ marginLeft: '10px', color: '#4299e1', textDecoration: 'underline' }} to='/signup'>Đăng ký</NavLink>
            </Flex>
          </Box>
        </Stack>
        <Box m={'20px auto'} w={{ base: '90%', sm: '75%', md: '75%', lg: '50%', xl: '50%', '2xl': '50%' }}>
          <Image w={'95%'} borderRadius={'10px'} h={'500px'} src={loginImg} alt='loginImg' />
        </Box>
      </Flex>
      <Footer />
      </>
  )
}

export default Login;