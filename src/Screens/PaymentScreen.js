import { Box, Button, Center, FormControl, HStack, Image, Input, ScrollView, Spacer, Text, VStack } from "native-base";
import React from "react";
import Buttone from "../Components/Buttone"
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

const paymentMethodes =[
    {image:require("../assests/pics/paypal.svg.png"), alt:"paypal", icon:"Ionicons"}, 
    {image:require("../assests/pics/easypaisa.png"), alt:"discover", icon:"fontAwesome"},
    {image:require("../assests/pics/jazzcash.png"), alt:"googlepay", icon:"fontAwesome"},
]

function PaymentScreen() {
    const navigation = useNavigation();
    return(
        <Box flex={1} safeAreaTop bg="amber.200" py={5} >
            {/* HEADER */}
            <Center pb={15}><Text color="black" fontSize={14} bold>PAYMENT METHOD</Text></Center>
            {/* SELECTION */}
            <Box h="full" bg="white" px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>{paymentMethodes.map((i, index)=>(
                        <HStack key={index}alignItems="center" bg="gray.200" px={3} py={1} justifyContent="space-between" rounded={10} >
                            <Box><Image source={i.image} alt={i.alt} resizeMode="contain" w={60} h={50}/></Box>
                            {i.icon === "Ionicons" ? (<Ionicons name="checkmark-circle" size={30}/>) 
                            : (<FontAwesome name="circle-thin" size={30}/>)}
                        </HStack>
                        ))}
                        <Button onPress={()=>navigation.navigate("Placeorder")} bg="amber.400" color="white" mt={5} >CONTINUE</Button>
                        <Text italic textAlign="center">
                            Payment method is <Text bold >"Paypal" </Text>by default
                        </Text>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    );
}

export default PaymentScreen;