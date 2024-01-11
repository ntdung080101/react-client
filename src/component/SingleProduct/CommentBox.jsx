import { Box, Center, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import Comment from "./Comment";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import axios from '../../utils/axios';
import { useState } from "react";

const CommentBox = (props) =>{
    const [comment,setComment] = useState('');

    const sendComment = () => {
        axios.post('comment/create',{
            productCode: props.productId,
            rely: null,
            content: comment
        })
        .then(result=>{
            console.log(result.data);
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return <>
        <Center >
            <Box bg='white' w='80%' p={4} color='black'>
                <Text fontSize={'2xl'} mb={'10px'}> Đánh giá sản phẩm</Text>
                {props.comments.map(el=>{
                    return <Comment avatar={el.khach_hang.hinh_anh} comment={el.noi_dung} stat={5} time={el.thoi_gian.slice(0,10)} name={el.khach_hang.ten} />
                })}

                {/* search input  */}
                <InputGroup
                w="100%"
                borderRadius={'30px'}
                display={{ base: 'none', md: 'none', lg: 'block',  }}
                >
                <Input
                    pr="4.5rem"
                    placeholder="Bình luận"
                    value={comment}
                    onChange={e=>setComment(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <ArrowForwardIcon cursor={'pointer'} onClick={sendComment}/>
                </InputRightElement>
                </InputGroup>
            </Box>
        </Center>
    </>
}

export default CommentBox;