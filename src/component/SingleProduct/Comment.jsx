import { Avatar, AvatarBadge, AvatarGroup, Box, Divider, Flex, HStack, Text } from '@chakra-ui/react'
import { FaRegStar, FaStar } from 'react-icons/fa';

const Comment = (props) => {
    return <>
        <Box  p={'5px'} mb={'5px'} color={'black'}>
            <Flex>
                <Avatar size='md' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <Box ml={'10px'}>
                    <Box>
                        <Text>{props.name} {' '}</Text>
                        <Text fontSize={'10px'}>{props.time} {' '}</Text>
                    </Box>
                    
                    <Box display={'flex'} fontSize={'10px'} mb={'10px'}>
                        {Array.from({ length: 5 }).map((_, index) => {
                            const isFilled = index < props.stat;
                            return isFilled ? (
                            <FaStar key={index} color="yellow" className="stroke-1 " />
                            ) : (
                            <FaRegStar key={index} color="gray" />
                            );
                        })}
                    </Box>

                    <Text>
                        {props.comment}
                    </Text>
                </Box>
            </Flex>
        </Box>
        <Divider />
    </>
}

export default Comment;