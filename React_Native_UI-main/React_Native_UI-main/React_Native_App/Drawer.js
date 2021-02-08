import React from 'react'
import {Image,StyleSheet} from 'react-native'
import {Block,Text,Button, styles} from 'expo-ui-kit'
import { createDrawerNavigator,
  DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import   {AntDesign, Feather ,Ionicons} from '@expo/vector-icons'

import Home from './screens/Home'
import About from './screens/About'
import  Service from './screens/Service'
import  Contact from './screens/Contact'

import Animated from 'react-native-reanimated'
const Drawer=createDrawerNavigator()
const Stack=createStackNavigator()


const Screens=({navigation,style})=>{
    return( 
      <Animated.View style={[{flex:1},style]}>   
         <Stack.Navigator  screenOptions={{
      headerTransparent:true,
      headerTitle:null,
      headerLeft:()=>(
        <Button transparent marginHorizontal padding onPress={()=>navigation.openDrawer()}> 
        <Feather name="menu" color="#fff" size={28}/>
        </Button>
      )
    }}>
    <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Service" component={Service} />
        <Stack.Screen name="Contact" component={Contact} />
  </Stack.Navigator>
  </Animated.View>

    )
}

const DrawerContent=(props)=>{
  return(
    <DrawerContentScrollView {...props}>
         <Block >
           {/* avatart */}
               <Block flex={0.4}  style={{padding:15}}  color="#62081F"  >
                   <Image source={{uri:"https://www.codemy.uz/logo01.png",height:60,width:60}}
                   resizeMode="center"
                   />
                   <Text  title white>
                          UzCodemy
                   </Text>
                   <Text  size={9} white>
                          In Rishtan
                   </Text>
               </Block>
      <DrawerItem
        label="Home"
        labelStyle={{marginLeft:-16}}
        onPress={() => props.navigation.navigate("Home")}
         icon={()=><AntDesign name="home" color="black" size={22}/>}
        />
        <DrawerItem
        label="About"
        labelStyle={{marginLeft:-16}}
        onPress={() => props.navigation.navigate("About")}
         icon={()=><Ionicons name="people-outline" size={24} color="black" />}
        />
       <DrawerItem
        label="Service"
        labelStyle={{marginLeft:-16}}
        onPress={() => props.navigation.navigate("Service")}
        icon={()=><AntDesign name="customerservice" color="black" size={22}/>}
        />
       <DrawerItem
        label="Contact"
        labelStyle={{marginLeft:-16}}
        onPress={() => props.navigation.navigate("Contact")}
        icon={()=><AntDesign name="phone" color="black" size={22}/>}
        />
        </Block>
    </DrawerContentScrollView>
  )
}


export default   () => {
  const [progress,setProgress]=React.useState(new Animated.Value(0))
  
  const scale=Animated.interpolate(progress,{
    inputRange:[0,1],
    outputRange:[1,0.8]
  })
  const screenStyles={transform:[{scale}]}
    return (
        <Drawer.Navigator
         drawerType="slide"
         overlayColor="transparent"
        initialRouteName="Home" 
        drawerContentOptions={{
          activeBackgroundColor:"transhparent",
          activeTintColor:"green",
          inactiveTintColor:"green"
        }}
        sceneContainerStyle={{backgroundColor:  "transparent"}}
        drawerContent={(props) =><DrawerContent {...props} />} >
        <Drawer.Screen name="Screens" >
          {props=><Screens {...props} style={screenStyles} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    )
}
