import React, { useState } from "react";
import { Text, Box, ScrollView, Image, Heading, HStack, Spacer, Button,View } from "native-base";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import { TouchableOpacity } from "react-native";
import { useSelector,useDispatch } from 'react-redux'
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import {AddBasket, RemoveBasket} from '../features/slice/BasketManagement'
import { MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import { useNavigation } from "@react-navigation/native";
function SingleProductScreen({route}) {
    const dispatch=useDispatch()
    const Basket=useSelector((state)=>state.Basket)
const [quantityCount,setquantityCount]=useState(0)
const [value, setValue] =useState(0);
const navigation= useNavigation();
const product = route.params;
    const PlusButtonHandler=()=>{
        setquantityCount(quantityCount+1)
        dispatch(AddBasket({
            name:product.Name,
            img:product.Image,
            price:product.Price
        }))
        
    }
    const MinusButtonHandler=()=>{
        if(quantityCount>0){
            setquantityCount(quantityCount-1)
            dispatch(RemoveBasket(product.Name))
        }
        else{
            setquantityCount(0)
        }
    }
    console.log(product)
    return(
        <>
        <Image style={{resizeMode: 'contain'}} source={{uri: product.Image}} alt="Image" w="full" h={200}/>
        <Box safeArea flex={1} bg="white" >
            <View px={5} >
                <Heading bold fontSize={20} mt={4}  isTruncated lineHeight={40}>{product.Name} </Heading>
                <Rating value={product.rating} text={`${product.rating} reviews`}/>
                <View style={{display:'flex',flexDirection:'row'}}>
                <TouchableOpacity onPress={MinusButtonHandler}>
                <MinusCircleIcon  size={40} color="#D70F64"/>
            </TouchableOpacity>
            <Text>{quantityCount}</Text>
            <TouchableOpacity onPress={PlusButtonHandler}>
                <PlusCircleIcon size={40} color="#D70F64"/>
            </TouchableOpacity>
            </View>
                <HStack alignItems="center" my={5}>{product.countInStock > 0 ? (
                    <NumericInput value ={value} totalWidth={120} totalHeight={30} iconSize={25}
                    step={1} maxValue={product.countInStock} minValue={0} borderColor="grey" textColor={"green"}
                    iconStyle={{color:"red"}} rightButtonBackgroundColor="yellow" leftButtonBackgroundColor="yellow" />
                    ) : (<Heading bold color={"black"} fontSize={20} >Price:</Heading>)}
                    <Spacer/><Heading bold color={"black"} fontSize={20} >${product.Price}</Heading>
                </HStack>
                <Text lineHeight={24} fontSize={12}>{product.description}</Text>
                <Button onPress={()=>navigation.navigate("Cart")} bg={"black"} color="white">Check CART</Button>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Review/>
            </ScrollView>
        </Box>
        </>
    );
}

export default SingleProductScreen;