import React from 'react'
import { View, Text,ImageBackground,TouchableOpacity} from 'react-native'

const Content = () => {
    return (
        <ImageBackground    source={{uri:"https://cdn1.photostockeditor.com/c/2311/person-sitting-front-of-laptop-laptop-computer.jpg"}} style={{width:"100%",height:400,opacity:100}}> 
                      <Text style={{textAlign:"center", fontSize:28,color:"green",marginTop:40,fontWeight:"bold"}}>𝐋𝐞𝐚𝐫𝐧 𝐂𝐨𝐝𝐢𝐧𝐠 𝐖𝐢𝐭𝐡 𝐔𝐳𝐂𝐨𝐝𝐞𝐦𝐲!!!</Text>
               <Text style={{color:"#fff",textAlign:"center",marginTop:50,fontSize:18,fontWeight:"600"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates voluptas maxime!</Text>
               <TouchableOpacity
                style={{
                backgroundColor:"teal",
                width:"50%",
                alignItems:"center",
                paddingVertical:10,
                marginTop:40,
                marginLeft:80,
                borderRadius:10          
            }}
               ><Text  style={{color:"#fff",fontSize:16}}>About Us</Text></TouchableOpacity>
        </ImageBackground>
    )
}

export default Content
