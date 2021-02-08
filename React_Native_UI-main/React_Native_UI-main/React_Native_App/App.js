import React, { useState } from 'react'
import { Button } from 'react-native'
import {StyleSheet} from 'react-native'
import {Block,Text} from 'expo-ui-kit'
import { NavigationContainer } from '@react-navigation/native';


import Drawer  from "./Drawer";
export default function App() {

  return (
      <NavigationContainer>
        <Drawer/>
          {/* <Block  center middle> 
                      <Text  primary>We are building Drawer  Menu using</Text>
                      <Text>react-navigation v5</Text>
          </Block> */}
          </NavigationContainer>
  )
}

const styles=StyleSheet.create({
   root:{
     flex:1,
     alignItems:"center",
     justifyContent:"center",
   },
 
})



