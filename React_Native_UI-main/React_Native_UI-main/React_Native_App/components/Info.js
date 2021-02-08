import * as React from 'react';
import { Card ,Title,Paragraph,Avatar,Button} from 'react-native-paper';
import {SafeAreaView,FlatList,View,Image} from 'react-native'
import { ImageBackground } from 'react-native';
const Info = () => {
    const  friends=[
                {  id:1,
                    title:"𝐅𝐫𝐨𝐧𝐭-𝐞𝐧𝐝",
                    body:`𝐇𝐓𝐌𝐋𝟓 ✔ ${"\n"}𝐂𝐒𝐒𝟑 ✔${"\n"}𝐁𝐨𝐨𝐭𝐬𝐭𝐚𝐩𝟒 ✔ ${"\n"}𝐉𝐚𝐯𝐚𝐬𝐜𝐢𝐩𝐭.   ✔ ${"\n"}  👇👇👇👇 𝙊𝙦𝙞𝙩𝙪𝙫𝙘𝙝𝙞:Ulugbek  ${"\n"}𝙏𝙚𝙡:+998912345678`,
                    img:"https://banner2.cleanpng.com/20180808/lo/kisspng-website-development-front-end-web-development-web-best-html5-development-company-in-india-hire-html-5b6ac8bd756038.0640730415337248614808.jpg",
                },
                
                {   id:2,
                    title:"Back-𝐞𝐧𝐝",
                    body:`𝙉𝙤𝙙𝙚 𝙅𝙨 ✔ ${"\n"}𝙈𝙤𝙣𝙜𝙤𝘿𝙗 ✔${"\n"}𝙎𝙌𝙇 ✔ ${"\n"}𝙋𝙝𝙥.✔ ${"\n"}👇👇👇👇 𝙊𝙦𝙞𝙩𝙪𝙫𝙘𝙝𝙞:Abdullajon   ${"\n"} 𝙏𝙚𝙡:+998912345678`,
                    img:"https://juristr.com/blog/assets/imgs/firebase-frameworks.png",},
                {   id:3,
                    title:"Android",
                    body:`𝙆𝙤𝙡𝙩𝙞𝙣 ✔ ${"\n"}𝙑𝙎. ✔${"\n"}𝙅𝙖𝙫𝙖 ✔ ${"\n"}𝘾#✔  ${"\n"}  👇👇👇👇 𝙊𝙦𝙞𝙩𝙪𝙫𝙘𝙝𝙞:Abdullajon  ${"\n"} 𝙏𝙚𝙡:+998912345678`,
                    img:"https://w7.pngwing.com/pngs/829/351/png-transparent-android-logo-web-browser-mobile-app-development-android-logo-business-mobile-app-development.png"},]
   return (
         
          <Card  style={{backgroundColor:"black"}}>
          <Card.Content  >
      <SafeAreaView style={{height:300,padding: 10,} }>
                <FlatList 
             keyExtractor={(friend)=>friend.name}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              data={friends}
              renderItem={({item})=>{
                  return(
                      <View style={{width:250, borderRightWidth:2,borderRightColor:"#ccc", 
                         marginVertical:10 ,padding: 8,}}>
                          <Avatar.Image size={45} source={{uri:`${item.img}`}} style={{marginBottom:-35}}  />
                    <Title  style={{marginLeft:50,color:"#ccc",fontSize:26}} >{item.title}</Title>
                    <Paragraph style={{color:"#ccc",fontSize:16}} >{item.body}</Paragraph>
                    <Button  mode="contained" style={{marginVertical:5,marginRight:8,backgroundColor:"teal"}}>Ro'yraxtdan O'tish </Button>
                    </View>
                    )
                }}
                />
            </SafeAreaView>
                </Card.Content>
    </Card>
  )
}

export default Info;