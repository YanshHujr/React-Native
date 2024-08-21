import React from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar, SafeAreaView, ImageBackground} from 'react-native';
import BackgroundImage from '../../assets/images/BackGroundImage.jpg';

function LogInOTPScreen2 (){
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.headerContainer}>
      <ImageBackground
        source= {BackgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover">
          <Text style={styles.headerText}>Sign In</Text>
      </ImageBackground>
    </View>
    <View style={styles.bodyContainer}>

      <Text style={styles.Text}>Enter Verification Code</Text>
      <Text style={styles.subText}>Please enter your phone number to complete log in.</Text>
      <View style={styles.OTPcontainer}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaa"
      />
       <TextInput
        style={styles.input}
        placeholderTextColor="#aaa"
      />
       <TextInput
        style={styles.input}
        placeholderTextColor="#aaa"
      />
       <TextInput
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      </View>
    </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  color: '#fff',
},
headerContainer: {
  flex: 0.7,
  justifyContent: 'center',
  alignItems: 'left',
  backgroundcolor: 'transparent',
},
backgroundImage: {
  width: '100%',
  height: '175%',
  flex: 1,
},
headerText: {
  fontSize: 40,
  fontWeight: 'bold',
  color: '#fff',
  paddingHorizontal: 10,
  paddingVertical: 5,
  marginTop: 275,
  marginLeft: 17,
},
bodyContainer: {
  flex: 1,
  backgroundColor: '#fff',
  width: '100%',
  height: '120%',
  borderRadius: 25,
  paddingHorizontal: 20,
},
Text: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#000',
  marginBottom: 10,
  marginTop: 10,
  marginLeft: 10,
},
subText: {
  fontSize: 14,
  color: '#7A7A7A',
  marginBottom: 10,
  height: 50,
  marginLeft: 10,
},
input: {
  height: 50,
  borderColor: '#ddd',
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 10,
  backgroundColor: '#B3E0E8',
  marginBottom: 50,
  marginLeft: 5,
  width: 50,
},
OTPcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
},
});

export default LogInOTPScreen2;
