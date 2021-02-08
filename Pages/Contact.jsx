import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.back} name="arrow-back-circle" size={45} color="#031d38" />
      <Text style={styles.office}>DROP IN OUR OFFICE</Text>
      <Text style={styles.info}>Our office is located in a beautiful building inside the busiest and fast-growing city</Text>
      <View style={styles.icons1}>
         <Icon style={styles.center} name="location-outline" size={40} color="#95a4b7" />
         <Text style={styles.text}>360 King Street<br/>Feasterville Trevose, PA 19053</Text>
      </View>
      <View style={styles.icons}>
         <MaterialCommunityIcons style={styles.center} name="cellphone-wireless" size={37} color="#95a4b7" />
         <Text style={styles.text}>(800) 900-200-300</Text>
      </View>
      <View style={styles.icons}>
         <Feather style={styles.center} name="mail" size={37} color="#95a4b7" />
         <Text style={styles.text}>info@codemy.com</Text>
      </View>

      <View style={styles.bottom}>
        <AntDesign style={styles.iconss} name="twitter" size={33} color="#95a4b7" />
        <Entypo style={styles.iconss} name="linkedin" size={33} color="#95a4b7" />
        <Entypo style={styles.iconss} name="instagram" size={33} color="#95a4b7" />
        <Entypo style={styles.iconss} name="facebook" size={33} color="#95a4b7" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#103f6e',
    paddingLeft: 70,
  }, 
  back:{
    position:'absolute',
    left: 13,
    top: 5,
  },

  office: {
   color:'white',
   fontSize: 45,
   fontWeight:700,
   width: '75%',
   paddingTop: 100,
  },

  info: {
    color:'whitesmoke',
    fontSize: 19,
    width: '85%',
    paddingTop: 30,
    paddingBottom: 40,
   },
   icons: {
       flexDirection: 'row',
       paddingBottom: 70,
   },
   icons1: {
    flexDirection: 'row',
    paddingBottom: 70,
    paddingLeft: -50,
  },  
   center:{
      paddingRight: 20,
   },
   text:{
       color:'rgb(246, 242, 242)',
       fontSize: 20,
       fontWeight:500,
   },
   bottom:{
    flexDirection: 'row',
    paddingTop: 20,
   },
   iconss:{
       bottom: 0,
       paddingRight:40,
   }

 

});