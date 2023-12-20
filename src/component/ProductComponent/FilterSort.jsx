import {
  Box,
  Button,
  Checkbox,
  Flex,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuItemOption,
  MenuList,
  Select,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import { HiChevronDown } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll('brand');
  const [brand, setBrand] = useState(initialBrand || []);
  // console.log(useSearchParams.getAll(""));
  const initialCategory = searchParams.getAll('category');
  const [category, setcategory] = useState(initialCategory || []);

  const initialOrder = searchParams.get('order');
  const [order, setOrder] = useState(initialOrder || '');
  const text = useColorModeValue('dark', 'light');
  useEffect(() => {
    let params = {
      brand,
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
    console.log(order, 'order');
  }, [brand, category, order]);

  const handleBrand = e => {
    console.log('brand', e.target.value);
    const { value } = e.target;
    let newBrand = [...brand];
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter(el => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };
  const handleCategory = e => {
    console.log('category', e.target.value);
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter(el => el !== value);
    } else {
      newCategory.push(value);
    }
    setcategory(newCategory);
  };
  const handleSort = e => {
    console.log(e.target.value);
    setOrder(e.target.value);
  };
  return (
    <Box
      w={'100%'}
      mt={'80px'}
      bg={'white'}
    // w={'70%'}
    >
      <Box
        display={'grid'}
        gridTemplateColumns={{
          base: 'repeat(1,1fr)',
          sm: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(2,1fr)',
          xl: 'repeat(6,1fr)',
          '2xl': 'repeat(6,1fr)',
        }}
        gap={['10px', '20px']}
        w={'100%'}
        bg={useColorModeValue('blackAlpha.400', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        direction={{ base: 'row', md: 'row' }}
        justifyContent={{ base: 'space-between' }}
        boxShadow={'0px 1px 0px gray.800'}
        padding={'5px'}
        align={'center'}
      >
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            colorScheme="gray"
            rightIcon={<HiChevronDown />}
          >
            Laptop
          </MenuButton>
          <MenuList minWidth="240px">
            <Flex
              title="Choose Brand"
              type="checkbox"
              flexDirection={'column'}
              onChange={handleBrand}
            >
              <MenuItemOption value="DELL">
                <Checkbox value="DELL" isChecked={brand.includes('DELL')}>
                  Dell
                </Checkbox>
              </MenuItemOption>
              <MenuItemOption value="LENOVO">
                <Checkbox value="LENOVO" isChecked={brand.includes('LENOVO')}>
                  Lenovo
                </Checkbox>
              </MenuItemOption>
              <MenuItemOption value="Acer">
                <Checkbox value="Acer" isChecked={brand.includes('Acer')}>
                  Acer
                </Checkbox>
              </MenuItemOption>
              <MenuItemOption value="HP">
                <Checkbox value="HP" isChecked={brand.includes('HP')}>
                  HP
                </Checkbox>
              </MenuItemOption>
              <MenuItemOption value="REDMI">
                <Checkbox value="REDMI" isChecked={brand.includes('REDMI')}>
                  Redmi
                </Checkbox>
              </MenuItemOption>
            </Flex>
          </MenuList>
        </Menu>

        <Stack>
          <Flex
            defaultValue="asc"
            title="Price"
            type="radio"
            flexDirection={'column'}
          >
            <Select
              textAlign={'center'}
              fontWeight={'800'}
              onChange={handleSort}
              bg={text === 'light' ? '#2c313d' : '#edf2f7'}
            >
              <option value={''}>Thứ tự</option>

              <option value={'asc'} name="order" selected={order === 'asc'}>
                Tăng
              </option>

              <option value={'desc'} name="order" selected={order === 'desc'}>
                Giảm
              </option>
            </Select>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};
