import { Box, Center, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import Comment from "./Comment";
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";

const CommentBox = () =>{
    return <>
        <Center >
            <Box bg='white' w='80%' p={4} color='black'>
                <Text fontSize={'2xl'} mb={'10px'}> Đánh giá sản phẩm</Text>
                <Comment comment="Sản phẩm rất tốt" stat={5} time="10:05 28/12/2023" name="Lý cao"/>
                <Comment comment="Dùng khá ok" stat={4} time="17:05 28/12/2023" name="Nguyễn Tuấn"/>
                <Comment comment="Sản phẩm dùng ổn" stat={4} time="14:05 29/12/2023" name="Lê Nam"/>
                <Comment comment="Trải nghiệm tốt" stat={5} time="17:05 30/12/2023" name="Đạt"/>

                {/* search input  */}
                <InputGroup
                w="100%"
                borderRadius={'30px'}
                display={{ base: 'none', md: 'none', lg: 'block',  }}
                >
                <Input
                    pr="4.5rem"
                    placeholder="Bình luận"
                />
                <InputRightElement width="4.5rem">
                    <ArrowForwardIcon />
                </InputRightElement>
                </InputGroup>
            </Box>
        </Center>
    </>
}

export default CommentBox;