import { useNavigation } from '@react-navigation/native';
import {  Heading } from 'native-base'
import React from 'react'
import {View,ScrollView,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'
import { useEffect } from 'react';
import { products } from '../data/Products.js';
import Rating from './Rating.js';
import Axios from 'axios'
import { useState } from 'react';


function HomeProducts() {
    const [Products,setProducts]=useState([])
    useEffect(()=>{
            Axios.get('http://10.20.23.118:3001/productInfo').then((result)=>{
                setProducts(result.data)
            })
    },[])
    const navigation = useNavigation();
    return (
        <View>
            {
                Products.map((product)=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Single',product)}>
                    <View style={{display:'flex',justifyContent:"center",position:'relative'}}>
                      <View style={{dislay:'flex',
                      flexDirection:'column',
                      position: 'absolute',
                      opacity:1,
                      zIndex:1,
                      justifyContent:"center",
                      alignItems:'center',
                      color:'white'}}>
                      <Text style={styles.text}>{product.Name}</Text>
                      <Text style={styles.paragraph}>${product.Price}</Text>
                       <Rating  value={product.rating}/>
                       <Text style={{color:"white"}}>{product.rating} reviews</Text>
                      </View>
                      <Image source={
                        {
                        uri:product.Image
                        }
                      }
                       style={styles.image}></Image>
                    </View>
                    </TouchableOpacity>
                ))
            }
        </View>
      )
}

export default HomeProducts
const styles=StyleSheet.create({
    text:{
      color:"white",
      fontWeight:"bold",
      fontSize:30,
    },
    paragraph:{
      color:"white",
    },
    image:{
      backgroundColor:'rgba(0,0,0,1)',
      height:200,
      margin:10,
      opacity:0.5,
      borderRadius:10,
      resizeMode:'contain',
    }
  }
  )
