import React from "react";
import { Text, Box, Center, ScrollView, HStack, Button } from "native-base";
import CartEmpty from "../Components/Notifications/CartEmpty";
import CartItems from "../Components/Notifications/CartItems";
import Buttone from "../Components/Buttone";
import { useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";

function CartScreen() {
    const navigation = useNavigation()
    const BasketItems=useSelector((state)=>state.Basket)
    const res = [];
    console.log(BasketItems)
    BasketItems.forEach(el => {
      const index = res.findIndex(obj => {
         return obj['name'] === el.name;
      });
      if(index === -1){
         res.push({
            "name": el.name,
            "img":el.img,
            "price":el.price,
            "count": 1,
         })
      }
      else{
         res[index]["count"]++;
      };
   });
   var total=0
   res.map((object)=>{
        total+=object.price*object.count
   })
    return(
        <Box flex={1} bg="amber.300" safeArea>
            {/* HEADER */}
            <Center w="full" py={5}> <Text color={"black"} fontSize={20} bold >Cart</Text></Center>
            
            {/* IF CART IS EMPTY */}
            {/* <CartEmpty/> */}

            {/* CART ITEM */}
            <ScrollView showsVerticalScrollIndicator={false}><CartItems basket={res}/>
                {/* BUTTONS */}
                {/* TOTAL */}
                <Center mt={5}>
                    <HStack rounded={50} justifyContent="space-between" bg="white" shahdow={2} w="90%" pl={5} h={45} alignItems="center" >
                        <Text>total:$</Text>
                        <Button px={10} h={45} rounded={50} bg="amber.900" _text={{color:"white", fontWeight:"semibold"}} _pressed={{color:"amber.500"}} >
                            {total}
                            </Button>
                    </HStack>
                </Center>
                {/* CHECKOUT */}
                <Center px={3}>
                    <Buttone onPress={()=>navigation.navigate("Shipping")} bg="black" color="white" mt={10} >CHECKOUT</Buttone>
                </Center>

            </ScrollView>
        </Box>
    );
}

export default CartScreen;