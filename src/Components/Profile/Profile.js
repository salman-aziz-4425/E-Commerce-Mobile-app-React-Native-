import { Box, FormControl, Input, ScrollView, VStack } from 'native-base'
import React from 'react'
import Buttone from "../Buttone"

const Inputs=[
  {label:"USERNAME", type:"text",},{label:"EMAIL", type:"text",},{label:"NEW PASSWORD", type:"password",},{label:"CONFIRM PASSWORD", type:"password",}
]

export default function Profile() {
  return (
    <Box h="full" bg="white" px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i,index)=>(
            <FormControl key={index}>
              <FormControl.Label _text={{fontSize:"12px", fontWeight:"bold",}} >{i.label}</FormControl.Label>
              <Input borderColor="black" borderWidth={0.5} bg="green.100" type={i.type} py={3} color="amber.900" fontSize={15} _focus={{bg:"green.400", borderColor:"black", borderWidth:1}} />
            </FormControl>
          )
          )}
          <Buttone bg="amber.900" color="white" >UPDATE PROFILE</Buttone>
        </VStack>
      </ScrollView>
    </Box>
  )
}