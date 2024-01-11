

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/Authentication/action';
import axios from '../utils/axios';
import { useToast } from '@chakra-ui/react';
import signupImg from '../Assets/signupImg.jpg';
import Loader from '../component/Loader&Error/Loader';
import { NavLink } from 'react-router-dom';
import Footer from '../component/HomeComponent/Footer';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [code, setCode] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isInit, setIsInit] = useState(true);

  const dispatch = useDispatch();
  const toast = useToast();

  const isRegister = useSelector(store => store.authReducer.isRegistered);
  const loader = useSelector(store => store.authReducer.isLoading);
  const error = useSelector(store => store.authReducer.isError);

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();

    let userData = {
      name,
      address,
      code,
      gmail: email,
      password,
      phoneNumber: mobile
    }

    if (!email || !password ) {
      toast({
        title: 'Đăng ký thất bại.',
        description: "Vui lòng điền vào ô trống.",
        status: 'warning',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return;
    }

    let check = false;
    
    if(isInit){
      axios.post('auth/initRegister-customer',{
        gmail:email,
        password,
      })
      .then(result=>{
        console.log(result.data)
        setIsInit(false);
      })
      .catch(error=>{
        console.log(error);
      })
    }else{
      dispatch(signup(userData))
      .then(result=>{
        if(error){
          toast({
            title: 'Đăng ký thất bại.',
            description: "Vui lòng kiểm tra lại thông tin.",
            status: 'error',
            duration: 4000,
            position: 'top',
            isClosable: true,
          })
        }else{
          toast({
            title: 'Đăng ký thành công',
            description: "Vui lòng đăng nhập.",
            status: 'success',
            duration: 4000,
            position: 'top',
            isClosable: true,
          })

          navigator('/login')
        }
      })
    }

    return;

  }
  

  return (
  
    loader ? <Loader/> :
    <>
    <Flex
      minH={'100vh'}
      align={'center'}
      pt={'50px'}
      justify={'center'}
      paddingTop={"20px"} p={'6% 3%'}
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }
}
      >
      <Stack w={{base : '95%', sm : '95%', md : '95%', lg : '50%', xl : '50%', '2xl' : '50%'}} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Đăng ký tài khoản
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {
              isInit? <form onSubmit={handleSubmit}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Mật khẩu</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Xác nhận mật khẩu</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'black'}
                  type='submit'
                  color={'white'}
                  _hover={{
                    bg: 'gray.700',
                  }}>
                  Đăng ký
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Đã có tài khoản? <NavLink style={{marginLeft : '5px', color : '#4299e1', textDecoration : 'underline'}} to='/login'>Đăng nhập</NavLink>
                </Text>
              </Stack>
            </form>:<form onSubmit={handleSubmit}>
              <FormControl id="email">
                <FormLabel>Gmail</FormLabel>
                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Mã xác thực</FormLabel>
                <Input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Tên</FormLabel>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Tên</FormLabel>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Địa chỉ</FormLabel>
                <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Số điện thoại</FormLabel>
                <Input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'black'}
                  type='submit'
                  color={'white'}
                  _hover={{
                    bg: 'gray.700',
                  }}>
                  Đăng ký
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Đã có tài khoản? <NavLink style={{marginLeft : '5px', color : '#4299e1', textDecoration : 'underline'}} to='/login'>Đăng nhập</NavLink>
                </Text>
              </Stack>
            </form>
            }
          </Stack>
        </Box>
      </Stack>
      <Box  w={{base : '95%', sm : '95%', md : '95%', lg : '50%', xl : '50%', '2xl' : '50%'}} p={'20px'}>
        <Image w={'100%'} mr={'20px'} borderRadius={'10px'} src={signupImg} alt='signupImg' />
      </Box>
    </Flex>
    <Footer />
  </>
  
  );

}

