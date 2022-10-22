import React from "react";
import { View, Text, HStack, Input, Box } from "native-base";
import HomeSearch from "../Components/HomeSearch";
import HomeProducts from "../Components/HomeProducts";
import ImageSlider from "../Components/ImageSlider";

function HomeScreen() {
    return(
        <Box 
        flex={1}
        bg="#fff">
            <HomeSearch />
            <ImageSlider/>
            <HomeProducts />
        </Box>
    );
}

export default HomeScreen;