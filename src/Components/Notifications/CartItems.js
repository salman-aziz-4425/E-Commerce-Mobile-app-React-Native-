import React from 'react'
import { Box, Button, Center, HStack, Image, Pressable, Text, VStack } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view'
import { products } from '../../data/Products'
import { FontAwesome } from "@expo/vector-icons"

const Swiper =(props) =>(
    <SwipeListView rightOpenValue={-50} previewRowKey="0"
    previewOpenValue={-40} previewOpenDelay={3000}
    data={props.basket} renderItem={renderItem}
    renderHiddenItem={hiddenItem} showVerticalScrollIndicator={false} />
)

const renderItem = (data) =>(
    <Pressable>

        <Box ml={6} mb={3}>
            <HStack alignItems="center" bg="white" shadow={1} rounded={10} overflow="hidden">
                <Center w="25%" bg="white" >
                    <Image source={{uri:data.item.img}} alt={data.item.name} w="full" h={24} resizeMode="contain"/>
                </Center>
                <VStack w="60%" px={2} space={3} >
                    <Text isTruncated bold fontSize={14} color="black" >{data.item.name}</Text>
                    <Text bold >${data.item.price}</Text>
                </VStack>
                <Center><Button bg="green.500" _pressed={{bg:"green.100"}} _text={{color:"white"}} >{data.item.count}</Button></Center>
            </HStack>
        </Box>
    </Pressable>
)

//Hidden
const hiddenItem = () =>(
    <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h="88%" ml="auto" justifyContent="center" bg="red.700" >
        <Center alignItems="center" sapce={2} >
            <FontAwesome name="trash" color="white" size={24} /> 
        </Center>
    </Pressable>
)


const CartItems = (props) => {
    console.log(props)
  return (
    <Box mr={6}>
        <Swiper basket={props.basket}/>
    </Box>
  )
}

export default CartItems