import React from "react";
import { Box, Heading, ScrollView } from "native-base";
import Orderinfo from "../Components/Profile/Orderinfo";
import {Ionicons, FontAwesome, FontAwesome5  } from '@expo/vector-icons'; 
import OrderItems from "../Components/OrderItems";
import PlaceOrderModel from "../Components/PlaceOrderModel";

function PlaceOrderScreen() {
    return(
        <Box flex={1} safeArea pt={6} bg="amber.100">
            <Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Orderinfo title="CUSTOMER" subTitle="Mr.Allyan" text="allyan@example.com"
                        icon={<FontAwesome name="user" size={30} color="white" />} />
                    <Orderinfo title="SHIPPING INFO" subTitle="Shipping: Pakistan" text="Pay Method: EasyPaisa"
                        icon={<FontAwesome5 name="shipping-fast" size={30} color="white" />} />
                    <Orderinfo title="DELIVER TO" subTitle="Address:" text="FAST NUCES CFD Campus "
                        icon={<Ionicons name="location-sharp" size={30} color="white" />} />
                </ScrollView>
            </Box>
            {/* ORDER ITEMS */}
            <Box px={6} flex={1} pb={3}>
                <Heading bold isTruncated fontSize={15} my={4}>PRODUCTS</Heading>
                <OrderItems/>
                {/* TOTAL */}
                <PlaceOrderModel/>
            </Box>
        </Box>
    );
}

export default PlaceOrderScreen;