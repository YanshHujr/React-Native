import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, ImageBackground} from 'react-native';
import BackgroundImage from '../../assets/images/BackGroundImage.jpg';

function LogInOTPScreen1 (){
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

      <Text style={styles.Text}>Welcome Back!</Text>
      <Text style={styles.subText}>Please enter your phone number to complete log in.</Text>

      <Text style={styles.lablelText}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>CONTINUE</Text>
      </TouchableOpacity>
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
lablelText: {
  fontSize: 15,
  fontWeight: 'bold',
  color: '#000',
  marginBottom: 5,
  marginLeft: 5,
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
  backgroundColor: '#FFF',
  marginBottom: 50,
  marginLeft: 5,
},
signInButton: {
  height: 50,
  backgroundColor: '#33A6A6',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  marginBottom: 15,
  marginLeft: 5,
},
signInButtonText: {
  color: '#FFF',
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default LogInOTPScreen1;
