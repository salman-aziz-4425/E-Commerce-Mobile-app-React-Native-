import React from "react";
import { Center, Heading, Image, Text } from "native-base";
import Tabs from "../Components/Profile/Tabs";

function ProfileScreen() {
    return(
        <>
            <Center bg="green.100" pt={10} pb={6} >
                <Image source={{uri:"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}}
                alt="profile" w={24} h={24} resizeMode="cover" rounded={50}/>
                <Heading bold fontSize={15} isTruncated my={2} color="black" >Mr.Allyan</Heading>
                <Text italic fontSize={10} color="black" >joined dec 12 2012</Text>            
            </Center>
            {/* TABS */}
            <Tabs/>
        </>
    );
}
export default ProfileScreen;