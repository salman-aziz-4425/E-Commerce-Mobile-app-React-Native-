import React, { useState } from 'react'
import { Box, CheckIcon, FormControl, Heading, Select, Text, TextArea, VStack } from 'native-base'
import Rating from './Rating';
import Message from './Notifications/Message';
import Buttone from './Buttone';

export default function Review(){
    const [ratings, setRatings] = useState("");
    return(
        <Box my={9} >
            <Heading bold fontSize={15} mb={2}>Review</Heading>

            {/* IF THERE IS NO REVIEW */}
            <Message color={"black"} bg="grey" size={13} bold children={"No Review"} />
            
            {/* REVIEW */}
            <Box p={5} bg="#E0E0E0" mt={5} rounded={5}>
                <Heading bold fontSize={15} color="black"> Mr.Allyan</Heading> <Rating value={4}/>
                <Text my={3}>jan 12 2022</Text> 
                <Message color="black" bg="white" size={12} children={"Very nice service i enjoyed using your app thats good experience very very nice. thanks"} />
            </Box>

            {/* WRITE REVIEW */}
            <Box mt={6}>
                <Heading fontSize={14} color="black" bold mb={4} >REVIEW THIS PRODUCT</Heading>
                <VStack space={6}>
                    <FormControl><FormControl.Label _text={{fontSize:"12px", fontWeight:"bold"}}>Rating</FormControl.Label>
                        <Select bg="green.100" borderWidth={0} rounded={5} py={3} placeholder="choose Rate"
                        _selectedItem={{bg:"coolGray.400", endIcon:<CheckIcon size={5}/>, justifyContent:"center", alignItems:"center" }}
                        selectedValue={ratings} onValueChange={(e)=> setRatings(e)} >
                            <Select.Item label="1 - Poor" value='1' />
                            <Select.Item label="2 - Good" value='2' />
                            <Select.Item label="3 - Best" value='3' />
                            <Select.Item label="4 - Excellent" value='4' />
                        </Select>
                    </FormControl>
                    <FormControl><FormControl.Label _text={{fontSize:"12px", fontWeight:"bold"}}>Comment</FormControl.Label>
                        <TextArea h={20} w="full" placeholder='Comment Here... ' borderWidth={0} py={4} bg="blue.100" _focus={{bg:"blue.100"}}></TextArea>
                    </FormControl>
                    <Buttone color="white">SUBMIT</Buttone>
                    {/* IF USER NOT LOGIN */}
                    <Message color="white" bg="black" children={"Please 'Login to write a Review'"} />

                </VStack>
            </Box>
        </Box>
    );
}