
import React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity,Platform,StatusBar, ImageBackground} from 'react-native';

export default function Welcome({set}) {
  return (
     <ImageBackground blurRadius={5} source={require("../assets/background.jpg")} style={styles.img}>
       <View style={styles.logoContainer}>
       <Image source={require('../assets/logo-red.png')} style={styles.logo}></Image>
         <Text style={styles.text1}>Sell What you Don't Need</Text>
       </View>    
       <TouchableOpacity style={styles.loginbutton} onPress={func}>
       <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signup}>
       <Text style={styles.text}>signup</Text>
        </TouchableOpacity>
       
     </ImageBackground>     
  );
  function func(){
    set({card:true})
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"center",
  },
  text:{
    fontSize:24,
    color:"white",
    textShadowColor:"grey",
    textShadowOffset:{
      width:-2,
      height:2,
    },
    textShadowRadius: 10
  },
  loginbutton:{
    backgroundColor:"red",
    width:'80%',
    height:50,
    borderRadius:24,
    justifyContent:"center",
    alignItems:"center",
    margin:"2%",
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.5,
    elevation: 4,
  },
  signup:{
    backgroundColor:"blue",
    width:'80%',
    height:50,
    borderRadius:24,
    justifyContent:"center",
    alignItems:"center",
    margin:"2%"
  },
  img:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",
  },
  logo:{
    width:100,
    height:100,
    margin:10,
  },
  logoContainer:{
    top:"13%",
    position:"absolute",
    alignItems:"center",
  },
  text1:{
    fontSize:24,
    fontWeight:"600",
  }
});
