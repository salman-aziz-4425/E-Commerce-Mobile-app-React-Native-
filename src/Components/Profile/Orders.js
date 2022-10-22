import { Box, Button, HStack, ScrollView, Text } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'

export default function Orders() {
  return (
    <Box h="full" bg="white" pt={5} >
      <ScrollView showsVerticalScrollIndicator={false} >
        {/* PAID ORDER */}
        <Pressable>
          <HStack space={4} justifyContent="space-between" alignItems="center" bg="gray.200" py={5} px={2}>
            <Text fontSize={10} color="blue.400" isTruncated>892508973</Text>
            <Text fontSize={12} color="black" bold isTruncated>PAID</Text>
            <Text fontSize={11} color="black" italic isTruncated>Dec 12 2021</Text>
            <Button px={7} py={1.5} rounded={50} bg="amber.900" _text={{color:"white",}} _pressed={{bg:"green.100"}} >$456</Button>
          </HStack>
        </Pressable>
        {/* PAID ORDER */}
        <Pressable>
          <HStack space={4} justifyContent="space-between" alignItems="center" py={5} px={2}>
            <Text fontSize={10} color="blue.400" isTruncated>892508973</Text>
            <Text fontSize={12} color="black" bold isTruncated>NOT PAID</Text>
            <Text fontSize={11} color="black" italic isTruncated>Aug 12 2021</Text>
            <Button px={7} py={1.5} rounded={50} bg="red.500" _text={{color:"white",}} _pressed={{bg:"green.100"}} >$456</Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}