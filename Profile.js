import React from "react";
import { SafeAreaView, View } from "react-native";




const Profile = () => {

    return (
        <SafeAreaView style = {styles.container}>

   <View style= {styles.nameTitle}>
    <Text>
        Profile
    </Text>

     </View>
    <View>

    <Image
        source={require('./assets/anime.jpg')}
        style ={styles.profileImage}
        resizeMode='center'/>
    </View>
    <title>
        Jane Doe
    </title>
    <caption>
        janedoe@gmail.com
    </caption>

        </SafeAreaView>
    );
};


export default Profile;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        
      },
      nameTitle:{
        fontWeight: "bold",
        fontSize: 25,
      }
})