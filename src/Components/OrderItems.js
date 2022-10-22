 import { Box, Button, Center, FlatList, HStack, Image, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import { products } from '../data/Products'
 
 const OrderItems = () => {
   return (
     <FlatList showsVerticalScrollIndicator={false} data={products.slice(0,3)} keyExtractor={(item)=>item._id}
     renderItem={({item})=> <Pressable>
        <Box mb={3}>
            <HStack alignItems="center" bg="white" shadow={1} rounded={10} overflow="hidden">
                <Center w="25%" bg="white">
                    <Image source={{uri: item.image}} alt={item.name} w="full" h={24} resizeMode="contain" />
                </Center>
                <VStack px={2} w="60%">
                    <Text isTruncated color="black" bold fontSize={12}>{item.name}</Text>
                    <Text mt={2} color="black" bold>${item.price}</Text>
                </VStack>
                <Center>
                    <Button bg="amber.900" _pressed={{bg:"green.100"}} _text={{color:"white"}}>5</Button>
                </Center>
            </HStack>
        </Box>
     </Pressable> } />
   )
 }
 
 export default OrderItems