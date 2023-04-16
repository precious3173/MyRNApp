import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Alert, ScrollView, TextInput, Button } from 'react-native';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";


//alt + arrow

export default function App() {

  const [text, setText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View 
      style ={{alignSelf: "flex-start"}}
      >

<View style = {styles.titleBar}>
        <Ionicons name = "ios-arrow-back" size={30} color="#888888"/>

        <Text style = {styles.modifyText} color ="#1C1919">
          Practice
        </Text>
      </View>

      </View>
     

      <View
      style = {{alignSelf: "center"}}
      >
      <View marginTop = {30}>
        <TouchableOpacity onPress={() => console
        .log("Image tapped")}>

        <Image
        source={require('./assets/anime.jpg')}
        style ={styles.profileImage}
        resizeMode='center'/>
        </TouchableOpacity>
       
      </View>
      <View
      style ={styles.add}
      >
      <Ionicons name ="ios-camera" size={30} color="#119DA4">

      </Ionicons>

      </View>

      </View>
     <View style = {styles.inputData}>

      <Text style = {styles.textHeader}>Name</Text>
      <TextInput
      placeholder = "name"
      value={text}
      onChange={text => setText(text)}
      style ={styles.inputText}
      />


<View style = {styles.ButtonDesign}>
<Button  
      onPress={()=> 
        
        Alert.alert("My details", "Do you want to add details?", [{
          text: "Yes", onPress: () => console.log("Details have been set")
        },
      {
        text: "No"
      },
    ] )}
      title='Save'
      color= "#119DA4"
      />

</View>

     </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  Image:{
    flex :1,
    width: undefined,
    height: undefined
  },
  titleBar:{
   flexDirection: "row",
   marginStart: 16,
   marginTop:30,   
   justifyContent: "space-between",
   marginHorizontal: 16
  },
  modifyText:{
  marginStart:50,
  fontWeight: "bold",
  fontSize: 25,
  alignSelf: "center",
},
  profileImage: {
width: 150,
height:150,
borderRadius:100  

  },
add:{
  backgroundColor: "#E4E4E4",
  position: "absolute",
  bottom:0,
  right:0,
  width:40,
  height:40,
  marginTop:-70,
  borderRadius:20,
  alignItems: "center",
  justifyContent: "center"
}, 
inputData:{
  marginTop:20, 
  marginStart: 30
},

textHeader:{
fontSize: 16,
marginTop: 10
},
inputText: {
  borderRadius:10,
  padding: 5,
  width: "85%",
  marginTop: 5,
  color: "#000",
fontSize:16,
borderWidth:2,
borderColor:"#E4E4E4"


},

ButtonDesign:{
  padding: 20,
  marginTop:20,
  width:"90%",
  alignSelf: "center"

}

});
