import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Buttone from "../Components/Buttone"

const ShippingInputs =[
    {label:"ENTER COUNTRY", type:"text",},{label:"ENTER CITY", type:"text",},
    {label:"ENTER POSTAL CODE", type:"text",},{label:"ENTER ADDRESS", type:"text",},
]

function ShippingScreen() {
    const navigation = useNavigation()
    return(
        <Box flex={1} safeAreaTop bg="amber.200" py={5} >
            {/* HEADER */}
            <Center pb={15}><Text color="black" fontSize={14} bold> DELIVERY ADDRESS </Text></Center>
            {/* INPUT */}
            <Box h="full" bg="white" px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>{ShippingInputs.map((i,index)=>(
                        <FormControl key={index} >
                            <FormControl.Label _text={{fontSize:"12px", fontWeight:"bold"}}>{i.label}</FormControl.Label>
                            <Input borderWidth={0.2} borderColor="amber.900" bg="green.100" py={4} type={i.type} color="amber.900" _focus={{ bg:"green.100", borderWidth:1, borderColor:"black" }} />
                        </FormControl>
                    ))}
                    <Button  onPress={()=>navigation.navigate("Checkout")} bg="amber.400" color="white" mt={5} >CONTINUE</Button>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    );
}

export default ShippingScreen;