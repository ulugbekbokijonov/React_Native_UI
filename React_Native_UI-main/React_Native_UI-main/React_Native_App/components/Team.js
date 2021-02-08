import React from 'react'
import { View, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

 

const Team = () => {
    return (
        <Card style={{padding: 10, backgroundColor:"#000",}}>
             <Text style={{textAlign:"center",fontSize:24,fontWeight:"bold",color:"#fff"}}>Our Teachers</Text>
           <View style={{display:"flex",flexDirection:"column",alignItems:"center",marginVertical:10}}>
           
           <Avatar.Image  size={64} style={{alignItems:"center"}} source={{uri:"https://static01.nyt.com/images/2017/01/12/well/move/adam-bryant-headshot/adam-bryant-headshot-square320-v2.jpg"}} />
              <Title style={{color:"#fff"}}>⁙ Ulugbek ⁙</Title>
              <Paragraph style={{color:"#fff",}}>💻FullStack devoloper💻</Paragraph>

              <View style={{borderStyle:"solid",borderWidth:1,borderColor:"#fff",width:"50%",marginVertical:10}}></View>
              <Avatar.Image  size={64} style={{alignItems:"center"}} source={{uri:"https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg"}} />
              <Title  style={{color:"#fff"}}>⁙ Abdullajon ⁙</Title>
              <Paragraph style={{color:"#fff",marginBottom:15}}>💻Back-end devoloper💻</Paragraph>
                <View style={{borderStyle:"solid",borderWidth:1,borderColor:"#fff",width:"50%",marginVertical:10}}></View>
              <Avatar.Image  size={64} style={{alignItems:"center"}} source={{uri:"https://www.machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1.jpg"}} />
              <Title style={{color:"#fff"}}>⁙ Boburjon ⁙</Title>
              <Paragraph style={{color:"#fff",}}> 💻IOS devoloper💻</Paragraph>
              <View style={{borderStyle:"solid",borderWidth:1,borderColor:"#fff",width:"50%",marginVertical:10}}></View>
              <Avatar.Image  size={64} style={{alignItems:"center"}} source={{uri:"https://images.squarespace-cdn.com/content/v1/5938f1841b631b8e4ea7c2df/1570162240343-JG8944IRHP60TPUZQK9N/ke17ZwdGBToddI8pDm48kLXCf88_9uNTKXkq27cF4sB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmzUsryC7riGV7bTeYhg5Sep4Y8p3OCJVqs3FfNTLch3O2M0DsfUdwheg190rC2-Re/man+3.jpg"}} />
              <Title style={{color:"#fff"}}>⁙ Nodirbek ⁙</Title>
              <Paragraph style={{color:"#fff"}}> 💻Android devoloper💻</Paragraph>
           </View>
                     
       
      </Card>   
    )
}

export default Team
